import { Col } from "react-awesome-styled-grid";
import { MainDiv, Card, CardBody, CardTitle, CardSubtitle } from "../styles/repoDetailStyle"

const UserRepos = (props: any) => {

  const { userRepo } = props
  return (
    <MainDiv>
      <h3>Repository</h3>
      {
        userRepo?.length > 0 ? userRepo?.map((item: any, index: number) => {
          return (<Col key={index}>
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
          </Col>)
        }) :
          "No Repository"
      }

    </MainDiv>
  );
};

export default UserRepos;
