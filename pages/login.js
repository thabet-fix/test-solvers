import { signIn } from "next-auth/react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { FormCheck } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Login() {
  return (
    <>
      <Container>
        <div className="login-box">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="titre-login">Create an account</h2>
              <p className="info-login">
                Already have an account <a href="#">Log in</a>
              </p>
              <div className="d-grid gap-2">
                <button className="btn btn-login">
                  <i className="fb-icon btn-icon"></i>
                  Continue with Facebook
                </button>
                <button
                  onClick={() => signIn("google")}
                  className="btn btn-login">
                  <i className="gg-icon btn-icon"></i>
                  Continue with Google
                </button>
                <button className="btn btn-login">
                  <i className="tw-icon btn-icon"></i>
                  Continue with Twitter
                </button>
              </div>
              <div className="separation">
                <span>Or</span>
              </div>
              <div className="register-box">
                <Form>
                  <div className="row">
                    <div className="col-sm-6">
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Jane" required />
                      </Form.Group>
                    </div>
                    <div className="col-sm-6">
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Doe" required />
                      </Form.Group>
                    </div>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Jane@gmail.com"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      required
                    />
                  </Form.Group>
                  <FormCheck
                    className="mt-5 check"
                    type="checkbox"
                    label="Subscribe to our monthly newsletter"
                  />
                  <div className="service">
                    By clicking below you agree to our{" "}
                    <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </div>
                  <div className="d-grid gap-2">
                    <Button className="btn btn-signup" type="submit">
                      Sign up
                    </Button>
                  </div>
                  <div className="service">
                    Already have an account ? {" "}
                    <a href="#">Log in</a>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </Container>
    </>
  );
}
