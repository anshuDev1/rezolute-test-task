import { UserDetails } from "../types/user"
import { Col } from "react-awesome-styled-grid";
import UserRepos from "./RepoDetail";
import {
  Container,
  Row,
  Col1,
  Col2,
  Card,
  CardBody,
  TextMuted,
  CustomGradient,
} from "../styles/userDetailStyle"

export const UserDetail = ({ user, userRepo }: {
  user: UserDetails | undefined,
  userRepo: any
}) => {

  return (
    <Container className="container">
      <Row className="row">
        <Col1>
          <Card>
            <Row>
              <CustomGradient>
                <img src={user?.avatar_url}
                  alt="Avatar" />
                <div>
                  <h5>{user?.login}</h5>
                  <p>{user?.bio}</p>
                  <a href={user?.html_url} target="_blank">Visit github profile!</a>
                </div>
              </CustomGradient>
              <div className="col-md-8">
                <CardBody>
                  <h6>Information</h6>
                  <Row>
                    <Col>
                      <h6>Public Repo</h6>
                      <TextMuted>{user?.public_repos}</TextMuted>
                    </Col>
                    <Col>
                      <h6>CreatedAt</h6>
                      <TextMuted>{user?.created_at}</TextMuted>
                    </Col>
                  </Row>

                </CardBody>
              </div>
            </Row>
          </Card>
        </Col1>
        <Col2>
          <Card>
            <UserRepos userRepo={userRepo} />
          </Card>
        </Col2>
      </Row>
    </Container>
  )
}