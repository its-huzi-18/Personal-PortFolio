"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Components/Footer";
import Icons from "../Components/Icons";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import MainHeading from "../Components/mainHeading";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      to_name: "Huzaifa",
      from_name: formData.name,
      message: formData.message,
      phone: formData.phone,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_6fkubph",
        "template_n294zjv",
        emailData,
        "d1p-lIgdQOeIb88cV"
      )
      .then(() => {
        setStatusMessage("Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setStatusMessage("Failed to send message, please try again later.");
        console.error("EmailJS error:", error.text || error);
      });
  };

  return (
    <div id="Contact" className="py-2 section overflow-hidden bg-mainBg">
      <MainHeading
        textSize="contactHead text-[2.7rem]"
        text1="Contact"
        text2="Me!"
      />

      <form
        onSubmit={handleSubmit}
        className="inputDiv max-w-[48rem] my-4 mx-auto text-center"
      >
        <div className="input-box flex justify-between flex-wrap">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="nameInput tagName flex-1 p-6 text-2xl rounded-xl m-2 bg-secondBg h-14"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="emailInput tagLines flex-1 p-6 text-2xl rounded-xl m-2 bg-secondBg h-14"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="input-box flex justify-between flex-wrap">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="numInput tagName flex-1 p-6 text-2xl rounded-xl m-2 bg-secondBg h-14"
            type="number"
            placeholder="Mobile Number"
          />
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="subInput tagLines flex-1 p-6 text-2xl rounded-xl m-2 bg-secondBg h-14"
            type="text"
            placeholder="Email Subject"
            required
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="messageInput cardTop resize-none w-full p-6 text-2xl rounded-xl m-2 bg-secondBg"
          cols={29}
          rows={7}
          placeholder="Your Message"
          required
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="btn text-[16px] bg-hoverColor rounded-full px-7 py-3 w-44 font-semibold shadow-custom tracking-wide text-black hover:bg-secondBg cursor-pointer hover:text-white"
        />
      </form>

      {statusMessage && (
        <p className="text-center text-green-500 mt-4">{statusMessage}</p>
      )}

      <div className="flex justify-between">
        <div className="iconsBg m-4 mx-3 border-2 border-hoverColor border-solid w-[18%] rounded-md p-[0.2rem]">
          <Icons />
        </div>

        <span className="footIconsDiv contacts text-hoverColor shadow-custom rounded-[4px] border-2 border-hoverColor flex justify-end items-center h-7 w-[30.7%] mt-9 mr-4 pr-[9px]">
          <i className="emailIcon text-2xl mr-[3px]">
            <MdOutlineMailOutline />
          </i>
          <span className="emailText">huzaifawahab2005@gmail.com</span>{" "}
          <span className="slash ml-1">|</span>{" "}
          <i className="ml-2 numIcon ">
            <FaPhoneAlt />
          </i>
          <span className="numText">+923470670936</span>
        </span>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
