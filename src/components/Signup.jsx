import React from 'react'

function Signup() {
  return (
    <main>
      <form className="signup-form">
        <h2>Signup Form</h2>

        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />

        <label for="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Full Name"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="domain@example.com"
          required
        />

        <label for="telephone">Telephone</label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="0964 000 000 00 00"
        />

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" />

        <label for="profile-color">Profile Color</label>
        <input type="color" placeholder="red" id="" name="profile-color" />

        <fieldset>
          <legend>Marital Status</legend>
          <label>
            <input type="radio" name="marital-status" value="single" checked />
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

        <label for="children">Nom. of Children</label>
        <select id="children" name="children">
          <option value="none">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <label for="degree">Choose your Degrees</label>
        <select id="degree" name="degree" multiple>
          <option value="diploma">Diploma</option>
          <option value="bsc">Bachelor of Science (BSc)</option>
          <option value="ba">Bachelor of Arts (BA)</option>
          <option value="hd">High Diploma</option>
          <option value="msc">Master of Science (MSc)</option>
        </select>

        <label for="about">About Yourself</label>
        <textarea
          id="about"
          name="about"
          placeholder="About Yourself"
        ></textarea>

        <label for="cv">Upload your CV</label>
        <div className="filee">
          <input type="file" id="cv" name="cv" />
        </div>
        <fieldset>
          <legend>Gender</legend>
          <label>
            <input type="radio" name="gender" value="male" checked />
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

export default Signup