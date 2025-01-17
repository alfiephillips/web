import React, { useState } from "react";
import {
  PageContainer,
  Navbar,
  NavLink,
  Title,
  Description
} from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: You could connect to an API or simply log
    console.log("Form Data:", formData);
    alert("Thank you! Your message has been sent.");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PageContainer>
      <Navbar>
        <NavLink href="/">home</NavLink>
        <NavLink href="/work">work</NavLink>
        <NavLink href="" $activeColor="cyan">contact</NavLink>
      </Navbar>

      <Title>contact me ✉️</Title>
      <Description>
        For contract work, business inquiries, or general questions, please
        send me a message using this form or via email:
        <b style={{ display: "block", marginTop: "0.5em" }}>
          <a
            style={{ textDecoration: "underline", color: "cyan" }}
            href="mailto:mail@alfiephillips.com"
          >
            mail@alfiephillips.com
          </a>
        </b>
      </Description>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          maxWidth: "400px"
        }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: "0.5em",
              borderRadius: "4px",
              border: "1px solid #666"
            }}
            required
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Email:
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "0.5em",
              borderRadius: "4px",
              border: "1px solid #666"
            }}
            required
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          Message:
          <textarea
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{
              padding: "0.5em",
              borderRadius: "4px",
              border: "1px solid #666",
              resize: "vertical"
            }}
            required
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "0.8em 1.2em",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "cyan",
            color: "#1a1a1a",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "1em"
          }}
        >
          Send
        </button>
      </form>
    </PageContainer>
  );
};

export default ContactPage;
