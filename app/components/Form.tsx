"use client";
import React, { useState } from "react";

import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

type FormValues = {
  name: string;
  email: string;
  message: string;
  note: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      if (values.note) {
        return;
      }
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      setIsSent(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-white text-3xl font-bold mb-4">
        Contact Me!
      </h4>
      <Formik
        initialValues={{ name: "", email: "", message: "", note: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="w-full mx-auto">
            <div className="flex flex-wrap">
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-purple-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  disabled={isLoading}
                  className="flex mx-auto text-white bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg"
                >
                  Submit
                </button>
              </div>
              <Field type="text" name="note" style={{ display: "none" }} aria-hidden="true" />
            </div>
          </div>
        </Form>
      </Formik>
      {isSent ? (
        <p className="text-white text-3xl font-bold my-8">Sent!</p>
      ) : null}
    </div>
  );
};

export default ContactForm;