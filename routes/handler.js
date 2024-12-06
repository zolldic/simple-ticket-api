import authController from "../controllers/AuthController.js";
import verifyToken from "../middleware/authMiddleware.js";

export default function handler(app) {
  const BASE = "/api/v0";

  app.use("/", verifyToken, (req, res) => {
    return res.status(200).json({ msg: "OK" });
  });

  app.use(`${BASE}/auth/login`, authController.Login);
  app.use(`${BASE}/auth/signup`, authController.Registar);

  /*
   * create event.
   * list avaliable events.
   * show event details.
   * buy event tickets.
   * */
}
