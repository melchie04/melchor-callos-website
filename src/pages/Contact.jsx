import React from "react";
import { motion } from "framer-motion";
import { contactData } from "../data/content";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
      className="w-full h-screen flex flex-col justify-center items-center text-center bg-light dark:bg-dark px-5"
    >
      <p className="lg:text-xl sm:text-lg xs:text-md text-base text-tertiary dark:text-secondary mb-4">
        {contactData.title}
      </p>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
