

const mongoose = require("mongoose");
// configure DB
const db_name = "skiffs";

mongoose
  .connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`successfully connected with ${db_name} database`))
  .catch((err) => console.log(`something went wrong while connecting with ${db_name}`));
