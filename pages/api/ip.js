// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const currentIP = `${req.headers['true-client-ip']}`;
  res.status(200).json({ name: `Your IP address is ${currentIP}` })
}
