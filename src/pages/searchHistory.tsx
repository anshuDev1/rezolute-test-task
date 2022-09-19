import React from "react";
import { Link } from "react-router-dom";

export interface Props {
  searchHistory: string[],
  setSearchHistory: (searchHistory: (pre: string[]) => string[]) => void
}

export const SearchHistory = ({ searchHistory, setSearchHistory }: Props) => {

  return (
    <>
      <h1>History</h1>
      <ul>
        {
          searchHistory.map((item) => {
            return (<div className="d-flex">
              <Link to={`/${item}`}>{item}</Link>
              <div className="m-1" onClick={() => {
                setSearchHistory((d) => d.filter(data => data !== item))
              }}> X </div>
            </div>)
          })
        }
      </ul>
    </>
  )

}
