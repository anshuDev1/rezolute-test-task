import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserRepos } from "../apiCalls/gitHubUsers";
import { UserDetail } from "../components/UserDetails";
import { UserDetails } from "../types/user";
import { Button, Input, StyledInput } from "../styles/searchStyle"
import toast from "react-hot-toast";
import moment from "moment";

export interface Props {
  setSearchHistory: React.Dispatch<React.SetStateAction<UserDetails[]>>
}

export const SearchGitHubUser = (props: Props) => {
  const { setSearchHistory } = props

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [user, setUser] = useState<UserDetails>();
  const [userRepo, setUserRepo] = useState();

  const { id } = useParams()

  const handleSearch = (searchQuery: string) => {
    if (searchQuery !== "") {
      const myPromise = getUser(searchQuery).then(res => {
        setUser(res.data)
        setSearchHistory((pre) => {
          if (pre.find(item => item.login === searchQuery))
            return [...pre.filter(item => item.login !== searchQuery), {
              ...res.data,
              date: new Date().toISOString()
            }]
          else
            return [...pre, { ...res.data, date: new Date().toISOString() }]
        })
        getUserRepos(searchQuery).then(result => {
          setUserRepo(result.data)
        })
      })

      toast.promise(myPromise, {
        loading: 'Loading',
        success: 'Got the data',
        error: 'Faild to fetch..'
      });
    } else {
      toast.error("search string should not be empty!");
    }

  }

  useEffect(() => {
    id && handleSearch(id)
  }, [id])

  return (
    <div className="mt-5">
      <h3>SEARCH GITHUB USER</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSearch(searchQuery)
      }} className="mb-4">
        <StyledInput className={"inputWithIcon"}>
          <Input
            type="text"
            value={id ? id : searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
          <Button type="submit">Search</Button>
        </StyledInput>

      </form>
      {user &&
        <UserDetail user={user} userRepo={userRepo} />
      }
    </div>
  )
}
