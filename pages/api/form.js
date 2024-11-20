import { HOST_BE } from "../../config/host";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const response = await fetch(`${HOST_BE}/yna/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const dataJson = await response.json();

    return res.json(dataJson);
  }

  if (req.method === "GET") {
    const { page = 0 } = req.query;

    const data = await fetch(`${HOST_BE}/yna?page=${page}&limit=50`);
    const dataJson = await data.json();

    return res.json(dataJson);
  }
}
