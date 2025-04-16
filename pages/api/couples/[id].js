// pages/api/couples/[id].js
import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req, res) {
  const id = parseInt(req.query.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid couples_id' });
  }

  if (req.method === 'GET') {
    const { data: record, error } = await supabase
      .from('couples')
      .select('session_code, data, created_at, updated_at')
      .eq('couples_id', id)
      .single();

    if (error) {
      console.error('Supabase fetch error:', error);
      return res.status(404).json({ error: 'Couple not found' });
    }

    return res.status(200).json(record);
  }

  if (req.method === 'PUT') {
    const { data: newData } = req.body;
    if (!newData) {
      return res.status(400).json({ error: 'data is required' });
    }

    const { error } = await supabase
      .from('couples')
      .update({ data: newData, updated_at: 'now()' })
      .eq('couples_id', id);

    if (error) {
      console.error('Supabase update error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Couple updated' });
  }

  res.setHeader('Allow', 'GET, PUT');
  res.status(405).end('Method Not Allowed');
}
