import React from "react";
import { Row, Col } from "react-awesome-styled-grid";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
`;

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 450px;
  overflow: auto;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`;
const CardTitle = styled.div`
  text-transform: capitalize;
  font-weight: 600;
`;
const CardSubtitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-transform: capitalize;
  color: #787878;
  a {
    text-decoration: none;
    color: #00b1ff;
  }
`;


const UserRepos = (props: any) => {

  const { userRepo } = props
  console.log("repossssss", userRepo)
  return (
    <MainDiv>
      {
        userRepo && userRepo?.map((item: any, index: number) => {
          return <Col key={index}>
            <Card>
              <CardBody>
                <CardTitle>{item?.name}</CardTitle>
                <CardSubtitle>{item?.description
                }</CardSubtitle>
                <CardSubtitle>
                  <a href={item?.html_url} target="_blank">Visit Repo</a>
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        })
      }

    </MainDiv>
  );
};

export default UserRepos;
