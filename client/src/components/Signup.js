import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup({setCurrentUser}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username, 
        password,
        password_confirmation,
        first_name,
        last_name,
        email
      }),
    }).then((response) => {
      if (response.created) {
        response.json().then((userData) => setCurrentUser(userData));
      }
    });
    navigate('/');
  }

  return (
    <>
    <h1>Signup</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete="off"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label htmlFor="password-confirmation">Password Confirmation</label>
      <input
        type="password"
        id="password-confirmation"
        autoComplete="off"
        value={password_confirmation}
        onChange={(event) => setPasswordConfirmation(event.target.value)}
      />
      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        id="first_name"
        autoComplete="off"
        value={first_name}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        id="last_name"
        autoComplete="off"
        value={last_name}
        onChange={(event) => setLastName(event.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
    </>
  );
}

export default Signup;