import { Col } from "react-awesome-styled-grid";
import { MainDiv, Card, CardBody, CardTitle, CardSubtitle } from "../styles/repoDetailStyle"

const UserRepos = (props: any) => {

  const { userRepo } = props
  return (
    <MainDiv>
      {
        userRepo?.length > 0 ? userRepo?.map((item: any, index: number) => {
          return (
            <Col md={4} key={index}>
              <Card>
                <CardBody>
                  <CardTitle>{item?.name}</CardTitle>
                  <CardSubtitle>{item?.description}</CardSubtitle>
                  <CardSubtitle>
                    <a href={item?.html_url} target="_blank" rel="noreferrer">Visit Repo</a>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>)
        }) :
          "No repository found"
      }
    </MainDiv>
  );
};

export default UserRepos;
