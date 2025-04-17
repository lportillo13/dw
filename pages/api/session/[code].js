import { supabase } from '../../../lib/supabase';

export default async function handler(req, res) {
  const { code } = req.query;

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('form_sessions')
      .select('data')
      .eq('code', code)
      .single();

    if (error) {
      return res.status(404).json({ error: 'Session not found' });
    }

    return res.status(200).json({ data: data.data });
  }

  if (req.method === 'PUT') {
    const { data: newData } = req.body;

    const { error } = await supabase
      .from('form_sessions')
      .update({ data: newData, updated_at: 'now()' })
      .eq('code', code);

    if (error) {
      console.error('Supabase update error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Session updated' });
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('form_sessions')
      .delete()
      .eq('code', code);

    if (error) {
      console.error('Error deleting session:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Session deleted' });
  }

  res.setHeader('Allow', 'GET, PUT, DELETE');
  res.status(405).end('Method Not Allowed');
}
