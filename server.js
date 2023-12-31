const express = require("express");

// const dotenv = require("dotenv");
// dotenv.config();

const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.static("client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

io.on("connection", (socket) => {
  console.log("Connected");

  let currUserId, currUserName, currRoom;

  socket.on("join-room", (roomId, id, username) => {
    console.log(roomId, id, username);
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", id, username);

    currUserId = id;
    currUserName = username;
    currRoom = roomId;

    socket.on("set-info", (srcId, destId, username, streamInfo) => {
      socket.to(roomId).emit("get-info", srcId, destId, username, streamInfo);
    });

    socket.on("set-audio", (userId, isAudio) => {
      io.to(roomId).emit("get-audio", userId, isAudio);
    });

    socket.on("set-video", (userId, isVideo) => {
      io.to(roomId).emit("get-video", userId, isVideo);
    });

    socket.on("replace-stream", (userId, username) => {
      socket.to(roomId).emit("stream-replaced", userId, username);
    });

    socket.on("message-sent", (username, message) => {
      socket.to(roomId).emit("message", username, message);
    });
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
    socket.to(currRoom).emit("user-disconnected", currUserId, currUserName);
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
