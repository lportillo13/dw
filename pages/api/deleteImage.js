import { cloudinary } from '../../lib/cloudinary';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { public_id } = req.body;

    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result === 'ok') {
      return res.status(200).json({ message: 'Deleted successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to delete' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
