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

// student1 document
// const student1 = new Student({
//   name: "Sam",
//   email: "sam@gmail.com",
//   age: 25,
// });

// student1.save();

// inserting multiple documents in collection
// Student.insertMany([
//   { name: "Thor", email: "thor@gmail.com", age: 30 },
//   { name: "Noor", email: "noor@hotmail.com", age: 28 },
//   { name: "Soni", email: "soni@gmail.com", age: 30 },
// ]);

// find documents where age >= 30
// Student.find({ age: { $gte: 30 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// update document where name: "soni" set email:soni@soni.in
Student.updateOne(
  { name: "Soni" },
  { email: "soni@soni.in" },
  { new: true }
).then((res) => {
  console.log(res);
});
