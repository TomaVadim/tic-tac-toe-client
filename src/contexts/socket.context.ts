import { createContext } from "react";
import socketio from "socket.io-client";

export const socket = socketio("http://localhost:3001/events", {
  transports: ["websocket"],
  extraHeaders: {
    initdata:
      window.Telegram.WebApp.initData ||
      "query_id=AAEeec8hAAAAAB55zyGa9KyO&user=%7B%22id%22%3A567245086%2C%22first_name%22%3A%22Vadim%22%2C%22last_name%22%3A%22Toma%22%2C%22username%22%3A%22vadimtoma%22%2C%22language_code%22%3A%22uk%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FmqWot_0o2_bwMejQN3fvTJ2IvmN_MErvUqcye6nDN5Q.svg%22%7D&auth_date=1734812808&signature=etxGWCx9SY5VR-2x2_tBaC_yFcUdAXlbVvyl2RyRbiJ5VWpKuHOQZgjTqF_UsV0Jv5Q11rr2jgbpyQSrhb_2Bg&hash=bc4b550c9c9cc158949dbca34440f9161c5305944e31f297f31bbdf41a24fcb1",
  },
});

export const SocketContext = createContext(socket);
