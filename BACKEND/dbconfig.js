const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.DATABASE_USER_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.ez75xfb.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
