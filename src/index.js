
import connectDB from "./db/dbConfig.js";
import app from './app.js'


const PORT = process.env.PORT;


app.listen(PORT, async(req, res) => {
    await connectDB()
  console.log(`Server is running on port ${PORT}`);
});