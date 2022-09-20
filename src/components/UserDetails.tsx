import { UserDetails } from "../types/user"
// import { Col } from "react-awesome-styled-grid";
import UserRepos from "./RepoDetail";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  TextMuted,
  CustomGradient,
  RepoHeading,
  ColInfo
} from "../styles/userDetailStyle"

export const UserDetail = ({ user, userRepo }: {
  user: UserDetails | undefined,
  userRepo: any
}) => {

  return (
    <Container className="container">
      <Row className="row">
        <Col width="66.66%">
          <Card>
            <Row>
              <div className="col-12">
                <RepoHeading className=""><h3>Information</h3></RepoHeading>
              </div>
              <CustomGradient>
                <img src={user?.avatar_url}
                  alt="Avatar" />
                <div>
                  <h5>Username - <span>{user?.login}</span></h5>
                  <p>Bio - <span>{user?.bio}</span></p>
                  <a href={user?.html_url} target="_blank" rel="noreferrer">Visit github profile!</a>
                </div>
              </CustomGradient>
              <div className="col-md-8">
                <CardBody>

                  <Row>
                    <ColInfo>
                      <h6>Name</h6>
                      <TextMuted>{user?.name}</TextMuted>
                    </ColInfo>
                    <ColInfo>
                      <h6>Location</h6>
                      <TextMuted>{user?.location}</TextMuted>
                    </ColInfo>
                  </Row>
                  <Row>
                    <ColInfo>
                      <h6>Public Repo</h6>
                      <TextMuted>{user?.public_repos}</TextMuted>
                    </ColInfo>
                    <ColInfo>
                      <h6>CreatedAt</h6>
                      <TextMuted>{user?.created_at}</TextMuted>
                    </ColInfo>
                  </Row>
                  <Row>
                    <ColInfo>
                      <h6>Followers</h6>
                      <TextMuted>{user?.followers}</TextMuted>
                    </ColInfo>
                    <ColInfo>
                      <h6>Following</h6>
                      <TextMuted>{user?.following}</TextMuted>
                    </ColInfo>
                  </Row>
                </CardBody>
              </div>
            </Row>
          </Card>
        </Col>
        <Col width="33.33%">
          <Card>
            <RepoHeading className=""><h3>Repository</h3></RepoHeading>
            <UserRepos userRepo={userRepo} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}