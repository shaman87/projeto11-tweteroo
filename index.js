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

app.post("/tweets", (request, response) => {
    const { username, tweet } = request.body;
    
    if(usersList.length > 0) {
        const avatar = usersList.find(value => value.username === username).avatar;
        tweetsList.push({ username, avatar, tweet });
        response.send("OK");
    }

    response.send("Error");
});

app.get("/tweets", (request, response) => {
    const showTweets = [];

    if(tweetsList.length >= 10) {
        for(let i = tweetsList.length - 1; i >= tweetsList.length - 10; i--) {
            showTweets.push(tweetsList[i]);
        }
    } else {
        for(let i = tweetsList.length - 1; i >= 0; i--) {
            showTweets.push(tweetsList[i]);
        }
    }

    response.send(showTweets);
});

app.listen(5000, () => console.log("Listening on port 5000"));