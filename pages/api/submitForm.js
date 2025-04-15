// pages/api/submitForm.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process form submission
    const data = req.body;
    // Validate and store data in your DigitalOcean Managed Database here
    // You can also handle file uploads or trigger other actions
    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
