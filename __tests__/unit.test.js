const mongoose = require("mongoose");

it("connects backend to Database", async () => {
  const db = await mongoose.connect(
    "mongodb+srv://db:swed123@cluster0.kbbyqnx.mongodb.net/?retryWrites=true&w=majority"
  );
  expect(db).toBe(db);
});
