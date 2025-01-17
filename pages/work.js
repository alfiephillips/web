import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PageContainer,
  Navbar,
  NavLink,
  Title,
  Description,
  ErrorText,
  Projects,
  ProjectItem,
  ProjectLink,
  ProjectName,
  ProjectStats,
  ProjectDescription
} from "../components";

const CACHE_KEY = "reposData";
const CACHE_TIME_KEY = "reposFetchTime";
const CACHE_DURATION_MS = 15 * 60 * 1000; // 15 minutes

const WorkPage = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const fetchRepos = async () => {
    try {
      const response = await axios.get("/api/repos");
      setRepos(response.data.repos);
      setError(response.data.error);

      // Store in cache
      localStorage.setItem(CACHE_KEY, JSON.stringify(response.data.repos));
      localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
    } catch (err) {
      setError("Failed to fetch repositories.");
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
    const now = Date.now();

    if (cachedData && cachedTime && now - Number(cachedTime) < CACHE_DURATION_MS) {
      // Use cached data
      setRepos(JSON.parse(cachedData));
    } else {
      // Fetch fresh data
      fetchRepos();
    }
  }, []);

  return (
    <PageContainer>
      <Navbar>
        <NavLink href="/">home</NavLink>
        <NavLink href="" $activeColor="cyan">work</NavLink>
        <NavLink href="/contact">contact</NavLink>
      </Navbar>

      <Title>my work 💻</Title>
      <Description>
        Here are some of my public repositories. You can find these on my 
        <b> GitHub</b> as well. Data is cached to minimize repeated requests.
      </Description>

      {error ? (
        <ErrorText>{error}</ErrorText>
      ) : (
        <Projects>
          {repos.length > 0 ? (
            repos.map((repo) => (
              <ProjectLink
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectItem>
                  <ProjectName>{repo.name}</ProjectName>
                  <ProjectDescription>
                    {repo.description ? repo.description : "No description yet."}
                  </ProjectDescription>
                  <ProjectStats>
                    <strong>Stars:</strong> ⭐ {repo.stargazers_count} |{" "}
                    <strong>Forks:</strong> 🍴 {repo.forks_count} |{" "}
                    <strong>Watchers:</strong> 👀 {repo.watchers_count} |{" "}
                    <strong>Open Issues:</strong> {repo.open_issues_count}<br />
                    <strong>License:</strong>{" "}
                    {repo.license ? repo.license.spdx_id : "None"}<br />
                    <strong>Created:</strong>{" "}
                    {new Date(repo.created_at).toLocaleDateString()} |{" "}
                    <strong>Last updated:</strong>{" "}
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </ProjectStats>
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
