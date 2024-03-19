import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

/**
 * Generic function to make API requests using Axios.
 * @param {string} endpoint - The API endpoint (path after the base URL).
 * @param {object} options - Request options including method, headers, and body.
 * @returns {Promise<any>} - The JSON response from the API if successful, or throws an error.
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  // Set default headers and allow for custom headers
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  try {
    // Axios automatically stringifies the body, so we don't need to do it manually.
    const response = await axios({
      method: options.method || "get", // Default to GET if no method is specified
      url: url,
      headers: headers,
      data: options.body,
      // Add other axios config as needed, for example, `params` for query parameters if method is GET
    });

    console.log(response.data);

    // Axios throws an error for bad status codes, so this check might be redundant
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error("Something went wrong with the API request.");
    }
  } catch (error) {
    console.error("API request error:", error);
    // You might want to handle errors based on error.response or error.request here
    throw error;
  }
}

export default apiRequest;
