import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserRepos } from "../apiCalls/gitHubUsers";
import { UserDetail } from "../components/UserDetails";
import { UserDetails } from "../types/user";
import { Button, Input, StyledInput } from "../styles/searchStyle"
import toast from "react-hot-toast";

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
        error: 'Error when fetching',
      });
    } else {
      toast.error("search string should not be empty!");
    }

  }

  useEffect(() => {
    id && handleSearch(id)
  }, [id])

  return (
    <>
      <h3>Search GitHub User</h3>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSearch(searchQuery)
      }}>
        <StyledInput className={"inputWithIcon"}>
          <Input
            type="text"
            value={id ? id : searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
        </StyledInput>
        <Button type="submit">Search</Button>
      </form>
      {user &&
        <UserDetail user={user} userRepo={userRepo} />
      }
    </>
  )
}
