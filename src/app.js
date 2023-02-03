import express from "express";
import indexRoutes from "./routes/index.routes.js";
import emplotedRoutes from "./routes/employes.routes.js";

const app = express();

app.use(express.json());

app.use("/api/", indexRoutes);
app.use("/api/", emplotedRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

export default app;
