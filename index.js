import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const usersList = [];
const tweetsList = [];

app.post("/sign-up", (request, response) => {
    const { username, avatar } = request.body;

    usersList.push({ username, avatar });
    response.send(usersList);
});

app.listen(5000, () => console.log("Listening on port 5000"));