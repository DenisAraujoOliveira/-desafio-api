const express = require("express");
const app = express();
const Cache = require('./src/utils/cache');
const authRoute = require("./src/routes/aplicacacao.autenticacao.route");
const userRoute = require("./src/routes/usuario.routes");
const authMiddleware = require("./src/routes/autenticacao.middleware")
app.use(express.json());


app.use("/", authRoute)
app.use("/usuario", authMiddleware, userRoute)


app.listen(process.env.PORT);