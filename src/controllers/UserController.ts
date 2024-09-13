import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userservice: UserService;
  constructor(userService = new UserService()) {
    this.userservice = userService;
  }

  //Regras de validações e operações.
  createUser = (req: Request, res: Response) => {
    const user = req.body

    if (!user.name || !user.email || !user.password )
      res.status(400).json({ message: "Bad Request! Name is required." });

    this.userservice.createUser(user.name, user.email, user.password);
    return res.status(201).json({ message: "Usuario criado" });
  };
  getUser = (req: Request, res: Response) => {
    return res.status(200);
  };

}
