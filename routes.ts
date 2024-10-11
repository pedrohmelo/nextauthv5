// an array of routes that are accessible for public without authentication @type {string[]}
export const publicRoutes = ["/"];

// an array of routes that are used for authentication, these routes will redirect user to /settings @type {string[]}
export const authRoutes = ["/auth/login", "/auth/register"];

//routes that start with this prefix are used for api authetication purposes, its type is a string
export const apiAuthPrefix = "/api/auth";

//the default redirect path after logged in, its type is a string
export const DEFAULT_LOGIN_REDIRECT = "/settings";
