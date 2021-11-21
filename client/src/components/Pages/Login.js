import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from "reactstrap";

const Login = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Login</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Please use your existing credentials to login.
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
              <CardFooter>
                If you don't have an account, please kindly{" "}
                <Link to="/register">Register for a New Account</Link>.
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
