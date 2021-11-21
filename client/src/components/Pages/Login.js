import { Link } from "react-router-dom";
import {
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
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Input without validation</Label>
                    <Input />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Valid input</Label>
                    <Input valid />
                    <FormFeedback valid>
                      Sweet! that name is available
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Invalid input</Label>
                    <Input invalid />
                    <FormFeedback>
                      Oh noes! that name is already taken
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Input without validation</Label>
                    <Input />
                    <FormFeedback tooltip>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label for="exampleEmail">Valid input</Label>
                    <Input valid />
                    <FormFeedback tooltip valid>
                      Sweet! that name is available
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label for="examplePassword">Invalid input</Label>
                    <Input invalid />
                    <FormFeedback tooltip>
                      Oh noes! that name is already taken
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
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
