// pages/api/createRSVP.js
import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { couple_id, guest_name, email, phone, status, guest_count, dietary_notes, message } = req.body;

    const { data, error } = await supabase
      .from('rsvps')
      .insert([{
        couple_id,
        guest_name,
        email,
        phone,
        status,
        guest_count,
        dietary_notes,
        message
      }])

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json(data)
  }

  res.status(405).json({ error: 'Method not allowed' })
}
