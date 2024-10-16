import { Octokit } from "@octokit/rest"
const username = 'Dickyrdiar';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 

console.log("token")

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

export const fetchingPinnedRepos = async () => {
  try {
    const {data} = await octokit.repos.listForUser({
      username,
      sort: 'update',
      direction: 'desc'
    })

    console.log(data)
  } catch (error) {
    console.log("error", error)
    return []
  }
}