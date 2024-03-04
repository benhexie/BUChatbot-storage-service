import express from "express";
import { chatRoutes } from "./routes";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function bootstrap() {
  app.get("/", (req, res) => {
    res.send("Hello from BU Chatbot!");
  });

  app.use("/chat", chatRoutes);

  app.use("*", (req, res) => {
    res.status(404).send("Not found");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error(err);
});
