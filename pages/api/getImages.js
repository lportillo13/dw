import cloudinary from '../../lib/cloudinary';

export default async function handler(req, res) {
  const { couple_id, folder } = req.query;

  const { resources } = await cloudinary.api.resources({
    type: 'upload',
    prefix: `couples/${couple_id}/${folder}`, // couples/1/gallery
    max_results: 50,
  });

  res.status(200).json(resources);
}
