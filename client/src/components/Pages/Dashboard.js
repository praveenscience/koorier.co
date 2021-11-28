import { Col, Container, Row } from "reactstrap";

const Dashboard = ({ User }) => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h1>Welcome {User.Fullname}</h1>
          <p>Here you can find everything you can do with the platform.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
