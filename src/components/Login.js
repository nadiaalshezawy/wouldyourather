import React, { Fragment } from "react";
import { Segment, Header, Button } from "semantic-ui-react";
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
    const { users } = this.props;
    const { value, toHome } = this.state;
    console.log(users);
    if (toHome === true) {
      //this.setState({ toHome: false });
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <br></br>
        <Segment textAlign="center" size="large" padded="very">
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
        </Segment>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(Login);
