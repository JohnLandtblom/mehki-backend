import { useState } from "react";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginRequestHandler = (e) => {
    e.preventDefault();
    props.sendToApp(userInfo);
  };

  // Simpelt exempel på ett objekt som vi skulle kunna skicka till backend
  const userInfo = {
    userEmail: email,
    userPassword: password,
  };

  return (
    <>
      <form className="loginForm" onSubmit={loginRequestHandler}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Login</button>
      </form>
      {/* Future React Router?`Dun dun duuu */}
      <a href="#">Register</a>
    </>
  );
}

export default LoginForm;
