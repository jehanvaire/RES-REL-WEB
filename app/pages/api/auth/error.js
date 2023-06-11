export default function handler(req, res) {
  res.status(400).json({ error: "An authentication error occurred." });
}
