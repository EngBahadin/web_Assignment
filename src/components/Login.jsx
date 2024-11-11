import React from "react";

function Login() {
  return (
    <main>
      <h2>Signin Form</h2>
      <section className="signin-form">
        <form>
          <label for="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username or Email"
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <div className="btn">
            <a href="##">Forgot Password?</a>
            <button type="submit">Signin</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
