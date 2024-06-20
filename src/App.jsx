import React from "react";
import Routes from "./Routes";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
// import dotenv from 'dotenv';

// dotenv.config()
function App() {
  React.useEffect(() => {
    axios.defaults.baseURL = "https://mern-chat-backend-one.vercel.app/";
    axios.defaults.withCredentials = true;
  }, []);

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
