function Signup() {
  return (
    <main>
      <form className="signup-form">
        <h2>Signup Form</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />

        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Full Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="domain@example.com"
          required
        />

        <label htmlFor="telephone">Telephone</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="0964 000 000 00"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" />

        <label htmlFor="profile-color">Profile Color</label>
        <input
          type="color"
          id="profile-color"
          name="profile-color"
          placeholder="red"
        />

        <fieldset>
          <legend>Marital Status</legend>
          <label>
            <input
              type="radio"
              name="marital-status"
              value="single"
              defaultChecked
            />
            Single
          </label>
          <label>
            <input type="radio" name="marital-status" value="married" />
            Married
          </label>
          <label>
            <input type="radio" name="marital-status" value="private" /> It is
            private
          </label>
        </fieldset>

        <label htmlFor="children">Number of Children</label>
        <select id="children" name="children">
          <option value="none">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <label htmlFor="degree">Choose your Degrees</label>
        <select id="degree" name="degree" multiple>
          <option value="diploma">Diploma</option>
          <option value="bsc">Bachelor of Science (BSc)</option>
          <option value="ba">Bachelor of Arts (BA)</option>
          <option value="hd">High Diploma</option>
          <option value="msc">Master of Science (MSc)</option>
        </select>

        <label htmlFor="about">About Yourself</label>
        <textarea
          id="about"
          name="about"
          placeholder="About Yourself"
        ></textarea>

        <label htmlFor="cv">Upload your CV</label>
        <input type="file" id="cv" name="cv" />

        <fieldset>
          <legend>Gender</legend>
          <label>
            <input type="radio" name="gender" value="male" defaultChecked />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" /> Female
          </label>
        </fieldset>

        <fieldset>
          <legend>Agreements</legend>
          <label>
            <input type="checkbox" name="terms" required /> I have read all the
            terms
          </label>
          <label>
            <input type="checkbox" name="agree" required /> Yes, I agree
          </label>
        </fieldset>

        <div className="btn">
          <button type="submit">Signup</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </main>
  );
}

export default Signup;
