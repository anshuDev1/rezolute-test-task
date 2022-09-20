import React from "react";
import { Link } from "react-router-dom";
import { UserDetails } from "../types/user";
import { TableMain, TableHead, TableData, TextHover } from "../styles/historyStyle"

export interface Props {
  searchHistory: UserDetails[],
  setSearchHistory: React.Dispatch<React.SetStateAction<UserDetails[]>>
}

export const SearchHistory = ({ searchHistory, setSearchHistory }: Props) => {
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
          searchHistory.map((item: UserDetails, index: number) => {
            return (
              <tr key={index}>
                <TableData>
                  <Link to={`/${item.login}`}> <TextHover>{item.login}</TextHover></Link>
                </TableData>
                <TableData>{item?.date}</TableData>
                <TableData>
                  <TextHover className="m-1" onClick={() => {
                    setSearchHistory((d) => d.filter(data => data.id !== item.id))
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
