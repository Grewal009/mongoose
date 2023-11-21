const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successfull!!!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/college");
}

// creating schema for document
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// creating model
// model in mongoose is a class with which we construct documents.
const Student = mongoose.model("Student", studentSchema);
