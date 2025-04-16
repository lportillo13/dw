// pages/api/couples.js
import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { session_code, data } = req.body;
    if (!session_code || !data) {
      return res.status(400).json({ error: 'session_code and data are required' });
    }

    // Insert and select the generated couples_id
    const { data: inserted, error } = await supabase
      .from('couples')
      .insert({ session_code, data })
      .select('couples_id')
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ couples_id: inserted.couples_id });
  }

  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}
