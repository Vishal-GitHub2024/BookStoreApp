// eslint-disable-next-line no-unused-vars
import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form Data Submitted: ", data);
    // Here you can handle the form data, e.g., send to an API
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="container mx-auto py-2 px-12 max-w-lg border rounded-md">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-1 border rounded-md outline-none "
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-sm text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-1 border rounded-md outline-none"
              placeholder="Enter your message"
              rows="5"
              {...register("message", { required: "Message is required" })}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-600">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white w-full px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
