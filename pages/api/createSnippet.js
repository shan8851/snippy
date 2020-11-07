import { createSnippet } from "../../utils/Fauna";

export default async function handler(req, res) {
  const { code, language, description, name } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Sorry, method not allowed here." });
  }

  try {
    const createdSnippet = await createSnippet(
      code,
      language,
      description,
      name
    );

    return res.status(200).json(createdSnippet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Sorry, something went wrong." });
  }
}
