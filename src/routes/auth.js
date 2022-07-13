import { Router } from "express";
import { getGithubInfo, getGitHubToken, gitHubLoginUrl } from "../auth/github";
import { getGoogleInfo, getGoogleToken, googleLoginUrl } from "../auth/google";

const router = Router();

router.get("/login/google", (req, res) => {
  res.redirect(googleLoginUrl);
});

router.get("/login/github", (req, res) => {
  res.redirect(gitHubLoginUrl);
});

router.get("/auth/google", async (req, res) => {
  const { code } = req.query;

  const token = await getGoogleToken(code);
  const data = await getGoogleInfo(token);

  res.json(data);
});

router.get("/auth/github", async (req, res) => {
  const { code } = req.query;

  const token = await getGitHubToken(code);
  const data = await getGithubInfo(token);

  res.json(data);
});

export default router;
