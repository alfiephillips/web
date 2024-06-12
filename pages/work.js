import {
  PageContainer,
  Navbar,
  NavLink,
  Title,
  Description,
  ErrorText,
  Projects,
  ProjectDescription,
  ProjectItem,
  ProjectLink,
  ProjectName,
  ProjectStats
} from "../components";

import { useEffect, useState } from "react";

import axios from "axios";

const WorkPage = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRepos = async () => {
      const response = await axios.get("/api/repos");
      setRepos(response.data.repos);
      setError(response.data.error);
    };

    getRepos();
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
      <Description>Check out my work that I've recently been involved in. This is also on my <b>GitHub</b></Description>
      {error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <Projects>
          {repos.length > 0 ? (
            repos.map((repo) => (
              <ProjectLink key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <ProjectItem>
                  <ProjectName>{repo.name}</ProjectName>
                  <ProjectDescription>{repo.description ? repo.description : ("No description yet.")}</ProjectDescription>
                  <ProjectStats>Stars ⭐ {repo.stargazers_count} | Forks 🍴 {repo.forks_count} | 🛠️ {repo.language ? repo.language : "MarkDown"}<br />⏰ Last updated: {new Date(repo.updated_at).toLocaleDateString()}</ProjectStats>
                </ProjectItem>
              </ProjectLink>
            ))
          ) : (
            <ErrorText>No repositories found.</ErrorText>
          )}
        </Projects>
      )}
    </PageContainer>
  );
};

export default WorkPage;
