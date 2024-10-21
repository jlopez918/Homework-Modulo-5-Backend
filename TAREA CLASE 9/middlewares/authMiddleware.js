const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    if (token === "mysecrettoken") {
      next();
    } else {
      res.status(403).json({ error: "Token incorrecto" });
    }
  } else {
    res.status(403).json({ error: "Falta token de autorización" });
  }
};

export default authMiddleware;
