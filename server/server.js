const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const searchRouter = require("./routes/search.router");
const favoriteRouter = require("./routes/favorite.router");
const mySnacksRouter = require("./routes/mySnacks.router");
const deleteRouter = require("./routes/delete.router.js");
const editRouter = require("./routes/edit.router");
const { use } = require("./routes/user.router");
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/search", searchRouter);
app.use("/api/favorites", favoriteRouter);
app.use("/api/mySnacks", mySnacksRouter);
app.use("/api/delete", deleteRouter);
app.use("/api/edit", editRouter),
  // Serve static files
  app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
