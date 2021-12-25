import { Component } from "react";
import FormInput from "../forminput/FormInput";
import CustomButton from "../custombutton/CustomButton";
import { auth, signInWithGoogle } from "../../utils/firebase/firebase.utils";
import "./SignIn.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
