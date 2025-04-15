import multer from 'multer';
import { cloudinary } from '../../lib/cloudinary';
import sharp from 'sharp';
import streamifier from 'streamifier';

// Middleware helper to disable Next.js default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Multer setup to get the image as a buffer
const upload = multer({
  storage: multer.memoryStorage(),
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await runMiddleware(req, res, upload.single('image'));

    const { couple_id, folder } = req.body;
    const buffer = req.file.buffer;

    const image = sharp(buffer);
    const metadata = await image.metadata();

    const resizeOptions =
      metadata.width >= metadata.height
        ? { width: 1920, height: null } // Horizontal
        : { height: 1920, width: null }; // Vertical

    const webpBuffer = await image
      .resize(resizeOptions)
      .webp({ quality: 80 })
      .toBuffer();

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `couples/${couple_id}/${folder}`,
        format: 'webp',
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ error: error.message });
        }
        return res.status(200).json(result);
      }
    );

    streamifier.createReadStream(webpBuffer).pipe(uploadStream);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: error.message });
  }
}
