import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { couple_id } = req.body;

  const { error } = await supabase
    .from('couples')
    .update({ session_code: null })
    .eq('couple_id', couple_id);

  if (error) {
    console.error('Failed to remove session_code:', error);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ success: true });
}
