"use client";

import { useState } from "react";
import { contactSchema } from "@/lib/validation/contactSchema";

const ContactForm = () => {
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
      return;
    }

    // ✅ Clear errors
    setErrors({});

    console.log("✅ Valid Data:", result.data);

    // 👉 Later backend dev will connect API here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Full Name */}
      <div>
        <label className="form_lable mb-1">Full Name</label>
        <input
          name="fullName"
          className="form-control w-full border p-2"
        />
        {errors.fullName && (
          <p className="error_msg">{errors.fullName[0]}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="form_lable mb-1">Email Id</label>
        <input
          type="email"
          name="email"
          className="form-control w-full border p-2"
        />
        {errors.email && (
          <p className="error_msg">{errors.email[0]}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label className="form_lable mb-1">Subject</label>
        <input
          name="subject"
          className="form-control w-full border p-2"
        />
        {errors.subject && (
          <p className="error_msg">{errors.subject[0]}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="form_lable mb-1">Message</label>
        <textarea
          name="message"
          className="form-control w-full border p-2"
          rows={4}
        />
        {errors.message && (
          <p className="error_msg">{errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        className="submite_btn"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;