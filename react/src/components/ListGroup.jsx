import React, { useContext } from "react";
// import ListItem from "./Listitemm";
import FeedbackContext from "../context/FeedbackContext";
import ListItem from "./ListItem";

const ListGroup = () => {
  const { Feedback } = useContext(FeedbackContext);

  // console.log(Feedback);

  return (
    <div className="w-[60%]  h-[auto]  mt-[1rem] ">
      {Feedback.map((Feedback) => (
        <ListItem key={Feedback.id} Feedback={Feedback} />
      ))}
    </div>
  );
};

export default ListGroup;
