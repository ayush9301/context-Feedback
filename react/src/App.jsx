import React, { useState, useContext } from "react";
import Navbar from "./components/Navbar";
import ListGroup from "./components/ListGroup";
import Form from "./components/Form";
import { FeedbackProvider } from "./context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <div className="flex items-center flex-col h-auto bg-cover bg-center ">
        <div className=" flex items-center flex-col size-full  bg-cover bg-center  ">
          <Navbar />

          <Form />

          <ListGroup  />
        </div>
      </div>
    </FeedbackProvider>
  );
}

export default App;
