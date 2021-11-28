import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";
import { LoginUser } from "../../services/Auth";

const Login = ({ handleAuth }) => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [UserError, setUserError] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    LoginUser(Username, Password)
      .then(res => {
        setUserError(null);
        handleAuth(res.data.Message.User);
      })
      .catch(err => {
        setUserError(err.response.data.Message);
      });
  };
  return (
    <div className="Login pb-5">
      <Container>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Login</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Please use your existing credentials to login.
                </CardSubtitle>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="position-relative">
                    <Label for="username">Username</Label>
                    <Input
                      id="username"
                      value={Username}
                      onChange={e => setUsername(e.target.value)}
                      valid={Username.trim().length > 2 && !UserError}
                      invalid={Username.trim().length > 2 && UserError}
                    />
                    <FormFeedback
                      valid={Username.trim().length > 2 && !UserError}
                      invalid={Username.trim().length > 2 && UserError}
                      tooltip={true}
                    >
                      {Username.trim().length > 2 && UserError
                        ? UserError
                        : "Hoping the username is already registered..."}
                    </FormFeedback>
                    <FormText>Enter your username.</FormText>
                  </FormGroup>
                  <FormGroup className="position-relative mt-5">
                    <Label for="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={Password}
                      onChange={e => setPassword(e.target.value)}
                      valid={Password.trim().length > 2}
                      invalid={Password.trim().length <= 2}
                    />
                    <FormFeedback
                      valid={Password.trim().length > 2}
                      invalid={Password.trim().length <= 2}
                      tooltip={true}
                    >
                      {Password.trim().length <= 2
                        ? "Password should be at least 3 characters!"
                        : "Great, thanks for a stronger password!"}
                    </FormFeedback>
                    <FormText>Enter your password.</FormText>
                  </FormGroup>
                  <Button
                    className="mt-4"
                    disabled={
                      Username.trim().length <= 2 || Password.trim().length <= 2
                    }
                  >
                    Submit
                  </Button>
                </Form>
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
