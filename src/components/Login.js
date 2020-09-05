import React from "react";
import { Dropdown, Segment, Header, Button } from "semantic-ui-react";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    value: "",
    toHome: false,
  };
  handleChange = (e) => {
    const value = e.target.value;

    this.setState(() => ({
      value,
    }));

    console.log(value);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
    const { value, toHome } = this.state;
    console.log(value);
    const { dispatch } = this.props;
    dispatch(setAuthedUser(value));
    this.setState({ toHome: true });

    console.log(toHome);
  };
  render() {
    const { users, authedUser } = this.props;
    const { value, toHome } = this.state;
    console.log(users);
    if (toHome === true) {
      //this.setState({ toHome: false });
      return <Redirect to="/" />;
    }

    return (
      <Segment padded textAlign="center" size="large">
        <Header as="h2">
          Welacome to Would you rather application
          <Header.Subheader>please Login</Header.Subheader>
        </Header>
        <form onSubmit={this.handleSubmit}>
          <select className="ui search dropdown" onChange={this.handleChange}>
            <option value="">Select user</option>
            {users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <br></br>
          <br></br>

          <Button type="submit" disabled={value === ""}>
            Submit
          </Button>
        </form>
        <Button negative>Cancel</Button>
      </Segment>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  // console.log(state);
  // const question = questions[ownProps.match.params.question_id];

  // console.log(question);
  return {
    //   question: question ? question : null,
    users: Object.values(users),
    authedUser,
  };
};

export default connect(mapStateToProps)(Login);
