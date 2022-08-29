import { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  // const [errorTitle, setError] = useState(""); used for validation when routes are set up

  const handleSubmit = (e) => {
    e.preventDefault();
    // here goes axios post statement when routes are set up
  };

  return (
    <>
      <form className="registerform" onSubmit={handleSubmit}>
        <input
          type="email"
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
        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastName}
        />
        <button>Register</button>
      </form>
    </>
  );
}

export default RegisterForm;
