import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const ListItem = ({ Feedback }) => {
  const { remove, editfeedback } = useContext(FeedbackContext);
  return (
    <div className="w-full mt-[0.5rem] shadow-lg bg-[#f2f0f1] rounded-md">
      <div className="w-full rounded-md my-[0.5rem] mx-[0.5rem] p-[0.5rem] relative">
        <h1 className="text-[0.8rem] md:text-[1.5rem] sm:text-[1.3rem] font-semibold">
          Rating: {Feedback.rating}
        </h1>
        <p className="text-[0.8rem] md:text-[1.1rem] sm:text-[1.1rem] overflow-auto">
          {Feedback.review}
        </p>
        <span className="absolute right-2 top-2 flex gap-2">
          <button
            onClick={() => editfeedback(Feedback)}
            className="bg-blue-400 text-white px-3 py-1 rounded-md hover:bg-blue-500 transition"
          >
            Edit
          </button>
          <button
            onClick={() => remove(Feedback.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default ListItem;
