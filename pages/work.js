import {
  PageContainer,
  Navbar,
  NavLink,
  Title,
  Description,
  Projects,
} from "../components";

import { useEffect, useState } from "react";

const WorkPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/alfiephillips/repos")
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
        console.log(data);
      });
  }, []);

  return (
    <PageContainer>
      <Navbar>
        <NavLink href="/">home</NavLink>
        <NavLink href="" $activeColor="green">
          work
        </NavLink>
        <NavLink href="/contact">contact</NavLink>
      </Navbar>
      <Title>my work 💻</Title>
      <Description>This page is currently in development!</Description>
      <Projects>
        {portfolio.map((repo, index) => {
          return (
            <div key={index}>
              <Title>{repo.name}</Title>
              <Description>{repo.description}</Description>
            </div> 
          )
        })}
      </Projects>
    </PageContainer>
  );
};

export default WorkPage;
