import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback) {
      setFeedbackList([...feedbackList, { id: Date.now(), name, feedback }]);
      setName("");
      setFeedback("");
    }
  };

  const handleDelete = (id) => {
    setFeedbackList(feedbackList.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">Feedback Form</h1>
      <div className="card p-4 shadow">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Your Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit Feedback
          </button>
        </form>
      </div>

      <h2 className="mt-4 text-center">Feedback List</h2>
      {feedbackList.length > 0 ? (
        <ul className="list-group mt-3">
          {feedbackList.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span><strong>{item.name}:</strong> {item.feedback}</span>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-muted mt-3">No feedback submitted yet.</p>
      )}
    </div>
  );
}

export default App;
