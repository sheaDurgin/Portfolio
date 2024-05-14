import React from "react";
import ContactForm from "@/components/Form";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;