const express = require("express");
const cors = require("cors");

const REST_PORT = 8001;

const returnHelloWorld = () => {
  return "hello";
};

// REST
const startREST = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get("/", (_, res) => {
    res.json({ result: returnHelloWorld() });
  });
  // app.post("/rest", (req, res) => {
  //   const args = req.body;
  //   try {
  //     res.json({ result: myFunction(args).result });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     res.status(500).json({ error: "An error occurred" });
  //   }
  // });

  app.listen(REST_PORT, () => {
    console.log(`Server is running on http://localhost:${REST_PORT}/rest`);
  });
};

startREST();
