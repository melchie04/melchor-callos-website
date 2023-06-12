import React from "react";
import { contactData } from "../data/content";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center bg-light dark:bg-dark px-5">
      <p className="lg:text-xl sm:text-lg xs:text-md text-base text-tertiary dark:text-secondary mb-4">
        {contactData.title}
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
