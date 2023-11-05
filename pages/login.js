import { signIn } from "next-auth/react";
import Container from "react-bootstrap/Container";

export default function Login() {
  return (
    <>
      <Container>
        <div className="login-box">
          <div>
            <button onClick={() => signIn("google")}>
              Sign in with Google
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
