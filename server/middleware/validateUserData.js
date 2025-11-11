export default function validateUserData(req, res, next) {
  const { name, email, password } = req.body;

  if (req.path.includes("register")) {
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }
  } else if (req.path.includes("login")) {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
  }

  next();
}
