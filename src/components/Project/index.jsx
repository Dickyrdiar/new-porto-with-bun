import { useEffect, useState} from "react"
// import { fetchingPinnedRepos } from "../../shared/fetchGithubApi"
import { Typography } from "@material-tailwind/react"
import { graphql } from "@octokit/graphql";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 

const Project = () => {
  const username = 'Dickyrdiar';
  const [pinnedRepos, setPinnedRepos] = useState([])

  useEffect(() => {
    const fetchingPinnedRepos = async () => {
      try {
        const octokitGraphql = graphql.defaults({
          headers: {
            authorization: `token ${GITHUB_TOKEN}`
          }
        })

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
                    desc
                  }
                }
              }
            }
          }
        `;

        const result = await octokitGraphql(query, {
          username
        })

        setPinnedRepos(result?.user?.pinnedItems?.nodes)
      } catch (error) {
        console.log("err", error)
      }
    }; 

    fetchingPinnedRepos()
  }, [])
 
  console.log("pinned repos", pinnedRepos)

  return (
    <>
      <div className="mt-[-250px] flex justify-center items-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <Typography className="font-roboto text-[35px] font-bold">
          Selected Project & Work
        </Typography>

        <div className="w-[60%]">
          <Typography className="font-roboto text-[15px] mt-2" color="#bfbfbf">
            Explore my curated showcase of the best projects, showcasing innovation, creativity and impact.
          </Typography>
        </div>
      </div>
      </div>

      <div className="mt-[-290px] flex justify-center items-center">
        <div className="container mx-auto p-4 w-[60%]">
          <div className="grid grid-cols-2 gap-4 place-items-center">
            {pinnedRepos?.map((val, index) => (
              <div key={index} className="flex justify-center items-center">
                <Typography className="font-roboto text-start text-[20px] mt-2 text-center">
                  {val?.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Project