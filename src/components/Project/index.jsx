import { useEffect, useState } from "react"
import { fetchingPinnedRepos } from "../../shared/fetchGithubApi"
import { Typography } from "@material-tailwind/react"

const Project = () => {
  const [pinnedRepos, setPinnedRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPinnedRepos = async () => {
      const repos = await fetchingPinnedRepos()
      setPinnedRepos(repos)
      setLoading(false)
    }

    getPinnedRepos
  }, [])

  console.log("response", loading, pinnedRepos)

  return (
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
  )
}

export default Project