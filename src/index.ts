import express, { Response, Request } from "express";
import { router } from "./routes/routes";
import { UserController } from "./controllers/UserController";
import 'reflect-metadata'
import { AppDataSource } from "./database";
const server = express();

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

server.use(router);
server.use(express.json()); 
const controllerUser = new UserController();

server.post("/user", controllerUser.createUser);

server.listen(5000, () => console.log("Server on"));
