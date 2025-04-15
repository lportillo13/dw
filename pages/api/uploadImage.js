import nextConnect from 'next-connect';
import multer from 'multer';
import cloudinary from '../../lib/cloudinary';
import sharp from 'sharp';

const upload = multer({ storage: multer.memoryStorage() });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: error.message });
  },
});

apiRoute.use(upload.single('image'));

apiRoute.post(async (req, res) => {
  const { couple_id, folder } = req.body;
  const buffer = req.file.buffer;

  const image = sharp(buffer);
  const metadata = await image.metadata();

  let resizeOptions = {};
  if (metadata.width >= metadata.height) {
    // Horizontal image
    resizeOptions = { width: 1920, height: null };
  } else {
    // Vertical image
    resizeOptions = { width: null, height: 1920 };
  }

  const webpBuffer = await image
    .resize(resizeOptions)
    .webp({ quality: 80 })
    .toBuffer();

  cloudinary.uploader.upload_stream(
    {
      folder: `couples/${couple_id}/${folder}`,
      resource_type: 'image',
      format: 'webp',
    },
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json(result);
    }
  ).end(webpBuffer);
});

export default apiRoute;

export const config = {
  api: { bodyParser: false },
};
