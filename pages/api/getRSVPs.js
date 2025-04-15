// pages/api/getRSVPs.js
import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { couple_id } = req.query

    const { data, error } = await supabase
      .from('rsvps')
      .select('*')
      .eq('couple_id', couple_id)

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json(data)
  }

  res.status(405).json({ error: 'Method not allowed' })
}
