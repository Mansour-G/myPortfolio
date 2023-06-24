import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  //this is called (process of destructuring)
  const { name, email, message } = formData;

  //Advanced way to handle
  const handleChangeInput = (e) => {
    setDisabled(e.target.empty);

    const { name, value } = e.tartget;
    // Here we dynamically change and store the value of specific field
    // Here we dynamically change and store the value for the selected field
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = async () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsFormSubmitted(true);
      setLoading(false);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a Coffe and Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:maansuur123@gmail.com" className="p-text">
            Hello at mg@dev.com{" "}
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +234 (7063) 557-247" className="p-text">
            +234 (7063) 557-247
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="app-flex">
              <input
                type="text"
                value={name}
                name="name"
                className="p-text"
                placeholder="your name"
                onChange={handleChangeInput}
                {...register("name", { required: true })}
              />
            </div>
            <div className="app-flex">
              <input
                type="email"
                value={email}
                name="email"
                className="p-text"
                placeholder="Email"
                onChange={handleChangeInput}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your message"
                value={message}
                name={message}
                onChange={handleChangeInput}
                {...register("message", { required: true })}
              />
            </div>
            <button
              type="button"
              className="p-text"
              onClick={handleSubmitForm}
            >
              {loading ? "Sending" : "Send Message"}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
