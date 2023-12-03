import {
    PageContainer, Navbar, NavLink, 
    Title, Highlight, Description, FooterText} 
    from "../components";

import React, {useState} from "react"

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