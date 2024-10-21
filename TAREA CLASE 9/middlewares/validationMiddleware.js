const validationMiddleware = (req, res, next) => {
  const { name, age, major } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res
      .status(400)
      .json({ error: "Invalid name. Name must be a non-empty string." });
  }

  if (age === undefined || typeof age !== "number" || age < 0) {
    return res
      .status(400)
      .json({ error: "Invalid age. Age must be a non-negative number." });
  }

  if (!major || typeof major !== "string" || major.trim() === "") {
    return res
      .status(400)
      .json({ error: "Invalid major. Major must be a non-empty string." });
  }

  next();
};

export default validationMiddleware;
