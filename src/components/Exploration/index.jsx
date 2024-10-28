 
import { Button, Typography } from "@material-tailwind/react"
import { graphql } from "@octokit/graphql";
import { useEffect, useState } from "react";
import GithubImage from '../../assets/github-mark/github-mark.svg'
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 

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
    <div className="mt-[-280px] flex justify-center items-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <Typography className="font-roboto text-[42px] font-bold">
          Exploration
        </Typography>

        <div className="w-full">
          <Typography className="font-roboto text-[17px] mt-2" color="#bfbfbf">
            My Web Project, Mobile, micro Front End and Library
          </Typography>
        </div>

        <div className="w-full mt-[90px]">
          <div className="grid grid-cols-5 gap-7">
            {pinnedRepos?.map((val, index) => (
              <div key={index} onClick={() => {window.location.href = val.url}} className="flex flex-col items-center p-4 bg-[#ffff] rounded-lg shadow-md cursor-pointer">
                {val.image}
                <Typography className="font-bold text-[18px] mt-5 ml-[20px] text-start cursor-pointer">
                  {val.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-max gap-4 mt-[35px]">
          <Button
            className="border border-gray-300 text-[#ffff] py-2 px-4 rounded-lg bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black-500" 
            variant="outlined"
            onClick={() => {window.location.href = 'https://github.com/Dickyrdiar'}}
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