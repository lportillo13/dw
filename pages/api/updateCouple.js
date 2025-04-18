import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, ...updatedData } = req.body;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'Missing or invalid id parameter' })
    }

    const { data, error } = await supabase
      .from('couples')
      .update(updatedData)
      .eq('couple_id', Number(id))
      .single();

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json(data)
  }

  res.status(405).json({ error: 'Method not allowed' })
}
