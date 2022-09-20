import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserRepos } from "../apiCalls/gitHubUsers";
import { UserDetail } from "../components/userDetails";
import { userDetails } from "../types/user";
import styled from "styled-components";
// import { triggerNotifier } from "../services/notifier";
import toast from "react-hot-toast";

export interface Props {
  setSearchHistory: React.Dispatch<React.SetStateAction<userDetails[]>>
}

export const SearchGitHubUser = (props: Props) => {
  const { setSearchHistory } = props

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [user, setUser] = useState<userDetails>();
  const [userRepo, setUserRepo] = useState();

  const { id } = useParams()

  const handleSearch = (searchQuery: string) => {

    const myPromise = getUser(searchQuery).then(res => {
      setUser(res.data)
      setSearchHistory((pre) => [...pre, res.data])
      getUserRepos(searchQuery).then(result => {
        setUserRepo(result.data)
      })
    })

    toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Got the data',
      error: 'Error when fetching',
    });
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
const Button = styled.button`
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.35em 1em;
  border: 2px solid gray;
  border-radius: 4px;
  background-color: #4b6ef1;
`;

const Input = styled.input`
  height: 40px;
  font-size: 16px;
  width: 30%;
  border: 2px solid #4b6ef1;
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 8px 15px;
  box-sizing: border-box;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
  color: #4b6ef1;

  &::placeholder {
    color: #4b6ef1;
  }

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 510px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;
