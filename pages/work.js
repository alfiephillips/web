import {
  PageContainer, Navbar, NavLink, 
  Title, Description} 
  from "../components";

import React from "react"

const WorkPage = () => {
  return (
    <PageContainer>
      <Navbar>
        <NavLink href="/">home</NavLink>
        <NavLink href="" $activeColor="green">work</NavLink>
        <NavLink href="/contact">contact</NavLink>
      </Navbar>
      <Title>my work 💻</Title>
      <Description>working on this page...</Description>
    </PageContainer>
  )
}

export default WorkPage;