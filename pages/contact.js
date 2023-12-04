import {
  PageContainer, Navbar, NavLink, 
  Title, Description} 
  from "../components";

// import sendEmail from "@/utilities/sendEmail";

import React from "react"

const ContactPage = () => {
  return (
    <PageContainer>
      <Navbar>
        <NavLink href="/">home</NavLink>
        <NavLink href="/work">work</NavLink>
        <NavLink href="" $activeColor="blue">contact</NavLink>
      </Navbar>
      <Title>contact me ✉️</Title>
      <Description>For contract work, business enquries, or general questions, contact me using the form below. I am available to discuss about any opportunities or interests you may have.</Description>
      <br />
      <Description><b>currently working on this page, contact me on <a style={{textDecoration: "underline", color: "white"}} href="mailto:mail@alfiephillips.com">mail@alfiephillips.com</a></b></Description>
    </PageContainer>
  )
}

export default ContactPage;