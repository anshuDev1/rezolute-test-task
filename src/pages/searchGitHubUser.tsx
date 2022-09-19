import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../apiCalls/gitHubUsers";
import { UserDetail } from "../components/userDetails";
import { userDetails } from "../types/user";
import styled from "styled-components";

export interface Props {
  setSearchHistory: (searchHistory: (pre: string[]) => string[]) => void
}

export const SearchGitHubUser = (props: Props) => {
  const { setSearchHistory } = props

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [user, setUser] = useState<userDetails>();

  const { id } = useParams()

  const handleSearch = (searchQuery: string) => {
    setSearchHistory((pre) => [...pre, searchQuery])
    getUser(searchQuery).then(res => {
      setUser(res.data)
    })
  }

  useEffect(() => {
    id && handleSearch(id)
  }, [id])

  return (
    <>
      <h1>SearchGitHubUser</h1>
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
        <UserDetail user={user} />
      }
    </>
  )

}
const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.35em 1em;
  border: 2px solid gray;
  border-radius: 4px;
`;

const Input = styled.input`
  height: 40px;
  font-size: 25px;
  width: 30%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: pointer;

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
