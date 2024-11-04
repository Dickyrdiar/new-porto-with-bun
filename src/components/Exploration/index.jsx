 
import { Button, Typography } from "@material-tailwind/react"
import { graphql } from "@octokit/graphql";
import { useEffect, useState } from "react";
import GithubImage from '../../assets/github-mark/github-mark.svg'
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN_AUTH; 

console.log("token", GITHUB_TOKEN)

const ExplorationProject = () => {
  const username = 'Dickyrdiar';
  const [pinnedRepos, setPinnedRepos] = useState([])

  useEffect(() => {
    const fetchingPinnedRepos = async () => {
      try {
        const octokitGraphql = graphql.defaults({
          headers: {
            authorization: `token ${GITHUB_TOKEN}`
          }
        });

        const query = `
          query ($username: String!) {
            user(login: $username) {
              pinnedItems(first: 6, types: [REPOSITORY]) {
                nodes {
                  ...on Repository {
                    name
                    description
                    url 
                    stargazerCount
                    forkCount
                    openGraphImageUrl
                  }
                }
              }
            }
          }
        `;

        const result = await octokitGraphql(query, { username });
        const repositoriesWithImage = result.user?.pinnedItems?.nodes.map(repo => ({
          ...repo,
          image:  <img src={GithubImage} className="h-40 w-40" />
        }))
        console.log("repo", repositoriesWithImage)
        setPinnedRepos(repositoriesWithImage)
      } catch (error) {
        console.error("Error fetching pinned repositories:", error);
      }
    };

    if (username) {
      fetchingPinnedRepos();
    }
  }, [username]);

  return (
    <div className="flex justify-center items-center min-h-screen pt-16 md:pt-0">
      <div className="text-center flex flex-col justify-center items-center px-4 md:mt-[-350px]">
        <Typography className="font-roboto text-4xl md:text-5xl font-bold ">
          Exploration
        </Typography>
    
        <div className="w-full">
          <Typography className="font-roboto text-base mt-2" color="#bfbfbf">
            My Web Project, Mobile, MicroFrontEnd and Library
          </Typography>
        </div>
    
        <div className="w-full mt-20 md:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-7">
            {pinnedRepos?.map((val, index) => (
              <div
                key={index}
                onClick={() => { window.location.href = val.url }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer"
              >
                {val.image}
                <Typography className="font-bold text-lg mt-5 ml-0 text-start cursor-pointer">
                  {val.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
    
        <div className="flex w-full justify-center gap-4 mt-8">
          <Button
            className="border border-gray-300 text-white py-2 px-4 rounded-lg bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black-500"
            variant="outlined"
            onClick={() => { window.location.href = 'https://github.com/Dickyrdiar' }}
            size="lg"
          >
            View On Github
          </Button>
        </div>
      </div>
    </div>
  
  )
}

export default ExplorationProject