import { deleteSnippet } from "../../utils/Fauna";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ msg: "Sorry, method not allowed here." });
  }

  const { id } = req.body;
  try {
    const deleted = await deleteSnippet(id);
    return res.status(200).json(deleted);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong." });
  }
}
