import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ErrorMsg from "../common/error-msg";
import { notifyError, notifySuccess } from "@/utils/toast";
import { submitToApi } from "@/lib/submit-api";

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string().required().label("Message"),
  remember: Yup.bool()
    .oneOf([true], "You must agree to the terms and conditions to proceed.")
    .label("Terms and Conditions"),
});

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!data) return;
    setSubmitting(true);
    const result = await submitToApi({
      formType: "contact",
      name: data.name?.trim() ?? "",
      email: data.email?.trim() ?? "",
      subject: data.subject?.trim() ?? "",
      message: data.message?.trim() ?? "",
      phone: data.phone?.trim() ?? "",
    });
    setSubmitting(false);
    if (result.success) {
      notifySuccess("Message sent successfully!");
      reset();
    } else {
      notifyError(result.error || "Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="easyunbox-contact-form" id="contact-form">
      <div className="easyunbox-contact-form__row">
        <div className="easyunbox-contact-form__field">
          <label htmlFor="name">Your Name</label>
          <input
            {...register("name", { required: "Name is required!" })}
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
          />
          <ErrorMsg msg={errors.name?.message} />
        </div>
        <div className="easyunbox-contact-form__field">
          <label htmlFor="email">Your Email</label>
          <input
            {...register("email", { required: "Email is required!" })}
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
          <ErrorMsg msg={errors.email?.message} />
        </div>
      </div>
      <div className="easyunbox-contact-form__field">
        <label htmlFor="subject">Subject</label>
        <input
          {...register("subject", { required: "Subject is required!" })}
          id="subject"
          name="subject"
          type="text"
          placeholder="Write your subject"
        />
        <ErrorMsg msg={errors.subject?.message} />
      </div>
      <div className="easyunbox-contact-form__field">
        <label htmlFor="message">Your Message</label>
        <textarea
          {...register("message", { required: "Message is required!" })}
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message here..."
        />
        <ErrorMsg msg={errors.message?.message} />
      </div>
      <div className="easyunbox-contact-form__field easyunbox-contact-form__field--checkbox">
        <label className="easyunbox-contact-form__checkbox-label">
          <input
            {...register("remember", { required: "You must agree to the terms." })}
            name="remember"
            type="checkbox"
          />
          <span>I agree to the terms and conditions.</span>
        </label>
        <ErrorMsg msg={errors.remember?.message} />
      </div>
      <div className="easyunbox-contact-form__submit">
        <button type="submit" className="easyunbox-contact-form__btn" disabled={submitting}>
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
