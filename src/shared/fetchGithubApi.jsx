import { Octokit } from "@octokit/rest"
const username = 'Dickyrdiar';
const GITHUB_TOKEN = "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"

console.log("token", GITHUB_TOKEN)

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