const express = require("express");
const app = express();

const rateLimiter = {};
const LIMIT = 5;
const WINDOW = 10 * 1000;

function rateLimitMiddleware(req, res, next) {
    const userId = req.ip;
    const currentTime = Date.now();

    if (!rateLimiter[userId]) {
        rateLimiter[userId] = [];
    }

    rateLimiter[userId] = rateLimiter[userId].filter(
        timestamp => currentTime - timestamp < WINDOW
    );

    if (rateLimiter[userId].length >= LIMIT) {
        return res.status(429).send("Too many requests");
    }

    rateLimiter[userId].push(currentTime);
    next();
}

app.get("/test", rateLimitMiddleware, (req, res) => {
    res.send("Request successful");
});

app.listen(3000, () => console.log("Server running on port 3000"));