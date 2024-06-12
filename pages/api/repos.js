// Imports

import axios from "axios";

// Initiation of global variables

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const USERNAME = "alfiephillips";

let cachedRepos = null;
let lastFetched = null;

// Handler for API Requests specifically to {HOST_NAME}/api/repos

export default async function handler(req, res) {
  // Check if repos are currently cached in session and if the cache session is valid.

  if (cachedRepos && lastFetched && Date.now() - lastFetched < CACHE_DURATION) {
    // Successful response, code 200

    return res.status(200).json({
      repos: cachedRepos,
      error: null,
      cached: true,
    });
  }

  try {
    // Fetch Github Repos using specified username
    const response = await axios.get(
      `https://api.github.com/users/${USERNAME}/repos`
    );
    cachedRepos = response.data;
    // Set new date for when data was last being fetched; to correctly calculate when cache should be renewed

    lastFetched = Date.now();

    // Successful response, code 200

    res.status(200).json({
      repos: cachedRepos,
      error: null,
      cached: false,
    });
  } catch (error) {
    // Error handling

    console.error("Error fetching Github Repos: ", toString(error));

    // Unsuccessful response, code 500

    res.status(500).json({
      repos: [],
      error: "Unable to fetch repositories.",
    });
  }
}
