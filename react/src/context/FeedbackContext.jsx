import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [Feedback, setFeedback] = useState([]);

  const add = (rating, review) => {
    setFeedback([
      { id: crypto.randomUUID(), rating: rating, review: review },
      ...Feedback,
    ]);
  };

  const remove = (id) => {
    setFeedback(Feedback.filter((Feedback) => Feedback.id !== id));
  };

  const [edit, setedit] = useState({
    Feedback: {},
    isedit: false,
  });

  const editfeedback = (Feedback) => {
    setedit({ Feedback: Feedback, isedit: true });
    // console.log(oldfeedback);
  };
  const update = (upadatedFeedback) => {
    setFeedback(
      Feedback.map((Feedback) =>
        Feedback.id === upadatedFeedback.id ? upadatedFeedback : Feedback
      )
    );

    setedit({
      Feedback: {},
      isedit: false,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{ Feedback, add, remove, edit, editfeedback, update }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
