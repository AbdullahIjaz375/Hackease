const API_BASE_URL = "http://localhost:5000";

/**
 * Generic function to make API requests.
 * @param {string} endpoint - The API endpoint (path after the base URL).
 * @param {object} options - Request options including method, headers, and body.
 * @returns {Promise<any>} - The JSON response from the API if successful, or throws an error.
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
  };

  // Combine the default headers with any headers provided in options
  const finalOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  if (finalOptions.body) {
    finalOptions.body = JSON.stringify(finalOptions.body);
  }

  try {
    const response = await fetch(url, finalOptions);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(
        data.message || "Something went wrong with the API request."
      );
    }

    return data;
  } catch (error) {
    // Log or handle errors more granularly as needed
    console.error("API request error:", error);
    throw error;
  }
}

export default apiRequest;
