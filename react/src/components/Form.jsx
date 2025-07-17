import React, { useEffect, useState } from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const Form = () => {
  const { add, edit, update } = useContext(FeedbackContext);
  const [rating, setrating] = useState("");
  const [review, setreview] = useState("");
  // console.log(edit.Feedback.Feedback.id);
  // console.log(edit.Feedback);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (edit.isedit === true) {
      update({ id: edit.Feedback.id, rating, review });
    } else {
      add(rating, review);
    }
    setrating("");
    setreview("");
  };
  useEffect(() => {
    setrating(edit.Feedback.rating);
    setreview(edit.Feedback.review);
  }, [edit]);
  return (
    <div className=" rounded-lg shadow-2xl bg-[#0f0707] w-[60%] h-[17rem] mt-[1rem] rounded-sm sm: w-[80%] ">
      <form
        onSubmit={(e) => handelSubmit(e)}
        className="flex flex-col p-[1rem] justify-between h-[100%] rounded-lg "
      >
        <select
          onChange={(e) => setrating(e.target.value)}
          value={rating}
          required
          className="h-[2.5rem] bg-white px-3 rounded-md  outline-none"
        >
          {/* <option className="invisible" value="0">
            0
          </option> */}
          <option className="sm:text-wrap" value="0">
            0
          </option>
          <option className="sm:text-wrap" value="1 ⭐☆☆☆☆">
            1
          </option>
          <option className="sm:text-wrap" value="2 ⭐⭐☆☆☆">
            2
          </option>
          <option className="sm:text-wrap" value="3 ⭐⭐⭐☆☆">
            3
          </option>
          <option className="sm:text-wrap" value="4 ⭐⭐⭐⭐☆">
            4
          </option>
          <option className="sm:text-wrap" value="5 ⭐⭐⭐⭐⭐">
            5
          </option>
        </select>

        <textarea
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handelSubmit(e);
            }
          }}
          onChange={(e) => setreview(e.target.value)}
          value={review}
          required
          className="h-[8rem] rounded-md p-[0.5rem] outline-none"
          placeholder="Enter your feedback"
        ></textarea>
        <button className=" rounded-md bg-[#0703ff9d] text-white h-[2rem]  ">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Form;
