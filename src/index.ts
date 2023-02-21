import express from "express";
import { AppDataSource } from "../data-source";

import { router } from "./routes";

AppDataSource.initialize().then(() => {

  const app = express();
  const port = process.env.PORT;

  app.use(express.json());
  app.use(router);
  
  app.listen(port, () => console.log(`Server running at port -> ${port}`));

});


