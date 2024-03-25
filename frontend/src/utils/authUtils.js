// authUtils.js

/**
 * Decodes a JWT token and returns its payload.
 * @param {string} token - JWT token to decode.
 * @returns {object} The decoded payload of the token.
 */
export const parseJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    // Handle the error if the token is invalid
    return null;
  }
};
