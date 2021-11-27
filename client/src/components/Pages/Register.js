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

const Register = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfPass, setConfPass] = useState("");
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="Register pb-5">
      <Container>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Register</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Please enter your information to create a new account here.
                </CardSubtitle>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="position-relative">
                    <Label for="username">Username</Label>
                    <Input
                      id="username"
                      value={Username}
                      onChange={e => setUsername(e.target.value)}
                      valid={
                        Username.trim().length > 2 &&
                        Username.trim() !== "Praveen"
                      }
                      invalid={
                        Username.trim().length > 2 &&
                        Username.trim() === "Praveen"
                      }
                    />
                    <FormFeedback
                      valid={
                        Username.trim().length > 2 &&
                        Username.trim() !== "Praveen"
                      }
                      invalid={
                        Username.trim().length > 2 &&
                        Username.trim() === "Praveen"
                      }
                      tooltip={true}
                    >
                      {Username.trim().length > 2 &&
                      Username.trim() === "Praveen"
                        ? "Oh noes! that name is already taken!"
                        : "Sweet! that name is available"}
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
                  <FormGroup className="position-relative mt-5">
                    <Label for="confpass">Confirm Password</Label>
                    <Input
                      id="confpass"
                      type="password"
                      value={ConfPass}
                      onChange={e => setConfPass(e.target.value)}
                      valid={ConfPass.trim().length > 2}
                      invalid={
                        ConfPass.trim().length <= 2 || ConfPass !== Password
                      }
                    />
                    <FormFeedback
                      valid={ConfPass.trim().length > 2}
                      invalid={
                        ConfPass.trim().length <= 2 || ConfPass !== Password
                      }
                      tooltip={true}
                    >
                      {ConfPass.trim().length <= 2 || ConfPass !== Password
                        ? ConfPass !== Password
                          ? "Both passwords should match"
                          : "Password should be at least 3 characters!"
                        : "Great, thanks for a stronger password!"}
                    </FormFeedback>
                    <FormText>Enter your password once again.</FormText>
                  </FormGroup>
                  <FormGroup className="position-relative mt-5">
                    <Label for="fullname">Fullname</Label>
                    <Input
                      id="fullname"
                      value={Fullname}
                      onChange={e => setFullname(e.target.value)}
                      valid={Fullname.trim().length > 2}
                    />
                    <FormText>Enter your full name.</FormText>
                  </FormGroup>
                  <FormGroup className="position-relative mt-5">
                    <Label for="email">Email</Label>
                    <Input
                      id="email"
                      value={Email}
                      onChange={e => setEmail(e.target.value)}
                      valid={Email.trim().length > 5}
                    />
                    <FormText>Enter your full name.</FormText>
                  </FormGroup>
                  <Button
                    className="mt-4"
                    disabled={
                      Username.trim() === "Praveen" ||
                      Username.trim().length <= 2 ||
                      Password.trim().length <= 2 ||
                      ConfPass.trim().length <= 2 ||
                      ConfPass !== Password ||
                      Email.trim().length <= 5
                    }
                  >
                    Submit
                  </Button>
                </Form>
              </CardBody>
              <CardFooter>
                If you already have an account, please kindly{" "}
                <Link to="/login">Login with your Existing Account</Link>.
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
