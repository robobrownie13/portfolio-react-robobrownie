import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  // Set initial state for name, email, message, and form errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  // Validate email format using regex
  const validateEmail = (email) => {
    return /^([\w\.-]+)@([a-zA-Z0-9\.-]+)\.([a-zA-Z]{2,})$/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate input fields and set errors if necessary
    if (name.length <= 4) {
      setNameError(true);
      valid = false;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    }
    if (message.length < 20) {
      setMessageError(true);
      valid = false;
    }

    // If all fields are valid, log form data and reset inputs
    if (valid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(true);
    }
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className={nameError ? "error" : ""}
        />
        {nameError && (
          <div className="error-message">
            Name must be at least 5 characters
          </div>
        )}

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? "error" : ""}
        />
        {emailError && (
          <div className="error-message">Invalid email format</div>
        )}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMsgChange}
          className={messageError ? "error" : ""}
        />
        {messageError && (
          <div className="error-message">
            Message must be at least 20 characters
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
      {messageSent && (
        <div className="success-message">Message sent successfully!</div>
      )}
    </div>
  );
}

export default Contact;
