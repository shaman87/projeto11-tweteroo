import express, { request, response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usersList = [];
const tweetsList = [];

app.post("/sign-up", (request, response) => {
    const { username, avatar } = request.body;

    usersList.push({ username, avatar });
    response.send("OK");
});

app.post("/tweets", (request, response) => {
    const { username, tweet } = request.body;

    tweetsList.push({ username, tweet });
    response.send("OK");
});

app.listen(5000, () => console.log("Listening on port 5000"));