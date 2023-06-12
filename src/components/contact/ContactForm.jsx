import React, { useState } from "react";
import {
  toastSuccess,
  toastWarning,
  toastError,
} from "../../utils/toastHelper";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toastWarning("Please complete all fields!");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    toastSuccess("Thank you! I will get back to you as soon as possible.");
  };

  return (
    <form
      className="lg:w-1/3 md:w-1/2 w-full mx-auto p-6 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <input
          className="w-full bg-transparent text-gray-800 dark:text-gray-200 px-2 py-1 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          type="text"
          id="name"
          name="name"
          value={name}
          autoComplete="off"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <input
          className="w-full bg-transparent text-gray-800 dark:text-gray-200 px-2 py-1 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          type="email"
          id="email"
          name="email"
          value={email}
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <textarea
          className="w-full h-28 bg-transparent text-gray-800 dark:text-gray-200 px-2 py-1 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          id="message"
          name="message"
          value={message}
          autoComplete="off"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center items-center text-center">
        <button
          className="flex items-center justify-center bg-primary text-white font-bold py-3 px-8 rounded-lg transition duration-300 hover:bg-primary/60"
          type="submit"
        >
          {isSending ? "LOADING..." : "SUBMIT"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
