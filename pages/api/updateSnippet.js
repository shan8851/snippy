import { updateSnippet } from "../../utils/Fauna";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ msg: "Sorry, method not allowed here." });
  }

  const { id, code, language, description, name } = req.body;

  try {
    const updated = await updateSnippet(id, code, language, name, description);
    return res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong." });
  }
}
