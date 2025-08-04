import dotenv from "dotenv";
dotenv.config();

const corsOptions = {
  origin: [
    process.env.CLIENT_URL,
    "http://localhost:5173",
    "http://localhost:4173",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
console.log("process.env.CLIENT_URL", process.env.CLIENT_URL);

const CHATSY_TOKEN = "chatsy-token";

export { corsOptions, CHATSY_TOKEN };
