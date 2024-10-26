import { Typography } from "@material-tailwind/react"
import { graphql } from "@octokit/graphql";
import { useEffect } from "react";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 

const ExplorationProject = () => {
  const username = 'Dickyrdiar';
  // const [pinnedRepos, setPinnedRepos] = useState([])

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
                }
              }
            }
          }
        }
        `;

        const result = await octokitGraphql(query, { username });
        console.log(result);
      } catch (error) {
        console.error("Error fetching pinned repositories:", error);
      }
    };

    fetchingPinnedRepos();
  }, []);


  return (
    <div className="mt-[-470px] flex justify-center items-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <Typography className="font-roboto text-[42px] font-bold">
          Exploration
        </Typography>

        <div className="w-full">
          <Typography className="font-roboto text-[17px] mt-2" color="#bfbfbf">
            My Web Project, Mobile, micro Front End and Library
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default ExplorationProject