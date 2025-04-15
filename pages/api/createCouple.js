// pages/api/createCouple.js
import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { data, error } = await supabase
      .from('couples')
      .insert([req.body])

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message })
    }
    return res.status(200).json(data)
  }
  
  res.status(405).json({ error: 'Method not allowed' })
}
