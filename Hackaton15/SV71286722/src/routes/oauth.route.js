import { AuthGithub, GithubCallback } from "../middlewares/oAuth.js";

import { Router } from "express";


export const authRoute = Router();

authRoute.get("/github", AuthGithub);
authRoute.get("/github/callback", GithubCallback);