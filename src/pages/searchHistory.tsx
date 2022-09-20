import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { userDetails } from "../types/user";

export interface Props {
  searchHistory: userDetails[],
  setSearchHistory: React.Dispatch<React.SetStateAction<userDetails[]>>
}

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TableMain = styled.table`
  margin: 15px auto;
`;

const TableHead = styled.th`
  min-width: 300px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 8px;
  background-color: #ccc;
`;

const TableData = styled.td`
  min-width: 300px;
  border: 1px solid #000;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0px 8px;
`;

const TextHover = styled.div`
  color: #0d6efd;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
// const Link = styled.a`
// &:hover {
//   color: #000;
// }
// `;

export const SearchHistory = ({ searchHistory, setSearchHistory }: Props) => {
  console.log("searchHistory", searchHistory)
  return (
    <>
      <h3>History</h3>
      <TableMain>
        <tr>
          <TableHead>name</TableHead>
          <TableHead>date time</TableHead>
          <TableHead></TableHead>
        </tr>
        {
          searchHistory.map((item: userDetails) => {
            return (
              <tr>
                <TableData>
                  <Link to={`/search/${item.name}`}> <TextHover>{item.name}</TextHover></Link>
                </TableData>
                <TableData>{item.name}</TableData>
                <TableData>
                  <TextHover className="m-1" onClick={() => {
                    // setSearchHistory((d) => d.filter(data => data.id !== item.id))
                  }}> remove </TextHover>
                </TableData>
              </tr>
            )
          })
        }



      </TableMain>
    </>
  )

}
