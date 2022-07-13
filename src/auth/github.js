import axios from "axios";
import * as queryString from "query-string";

const queryParams = queryString.stringify({
  client_id: process.env.GITHUB_ID,
  redirect_uri: "http://localhost:3000/auth/github",
  scope: ["read:user", "user:email"].join(" "),
  allow_signup: true,
});

export const gitHubLoginUrl = `https://github.com/login/oauth/authorize?${queryParams}`;

export async function getGitHubToken(code) {
  const response = await axios({
    url: "https://github.com/login/oauth/access_token",
    params: {
      client_id: process.env.GITHUB_ID,
      client_secret: process.env.GITHUB_SECRET,
      redirect_uri: "http://localhost:3000/auth/github",
      code,
    },
  });

  const parsedData = queryString.parse(response.data);

  return parsedData.access_token;
}

export async function getGithubInfo(token) {
  const { data } = await axios({
    url: "https://api.github.com/user",
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(data);
  return data;
}
