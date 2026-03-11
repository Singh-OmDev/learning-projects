import React, { useEffect } from "react";
import { socket } from "./socket";

const App = () => {
  useEffect(() => {
    socket.connect();

    console.log("Socket connected");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      App Running
    </div>
  );
};

export default App;