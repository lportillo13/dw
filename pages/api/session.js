// pages/api/session.js
import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // generate a new session code without adding a new dependency
    const code = crypto.randomUUID();

    const { error } = await supabase
      .from('form_sessions')
      .insert({ code, data: {} });

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json({ code });
  }

  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}
