import { Col, Container, Row } from "reactstrap";

const Profile = ({ User }) => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h1>User Profile: {User.Fullname}</h1>
          <p>Here you can find your complete details.</p>
          <div className="list-group">
            {Object.keys(User).map(key => (
              <div className="list-group-item" key={key}>
                <p className="mb-1">{key}</p>
                <h5 className="mb-1">{User[key]}</h5>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
