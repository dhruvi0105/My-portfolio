export default function handler(req, res) {
    const data = { message: "Hello, world!" };
    res.status(200).json(data);
  }
  