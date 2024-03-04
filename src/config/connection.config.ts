import { connect } from "mongoose";
import "dotenv/config";

const MONGO_URI = process.env.MONGO_DB_URL as string;


export const connection = connect(MONGO_URI, {
  autoIndex: true,
});

connection.then(() => {
  console.log("Connected to MongoDB");
});

connection.catch((error) => {
  console.error("Error connecting to MongoDB", error);
});
