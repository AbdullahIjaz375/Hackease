import axios from "axios";

const API_BASE_URL = "https://hackease-backend.onrender.com";

async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // Add authorization header if user is logged in
  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await axios({
      method: options.method || "get",
      url: url,
      headers: headers,
      data: options.body,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error("Something went wrong with the API request.");
    }
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}

export default apiRequest;
