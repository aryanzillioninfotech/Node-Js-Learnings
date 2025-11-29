const http = require("http");
const fs = require("fs");

function writeLogs(routeName) {
    const logText = `[${new Date().toLocaleString()}] Requested Route: ${routeName}\n`;
    fs.appendFile("logs/log.txt", logText, "utf-8", (err) => {
        if (err) console.log("Unable to record log:", err);
    });
}

function loadPage(res, fileName) {
    fs.readFile("pages/" + fileName, "utf-8", (err, fileContent) => {
        if (err) return res.end("<h2>Server Problem, Please Try Later!</h2>");
        res.end(fileContent);
    });
}

const myBasicServer = http.createServer((req, res) => {
    writeLogs(req.url);

     if (req.url === "/") {
        loadPage(res, "home.html");
    }
    else if (req.url === "/contact") {
        loadPage(res, "contact.html");
    }
    else if (req.url === "/projects") {
        loadPage(res, "projects.html");
    }
    else if (req.url === "/about") {
        loadPage(res, "about.html");
    }
    else if (req.url === "/skills") {
        loadPage(res, "skills.html");
    }
    else {
        loadPage(res, "notfound.html");
    }
});

myBasicServer.listen(9000, () => {
    console.log("Server Running on http://localhost:9000");
});
