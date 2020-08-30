import React from "react";
import { Dropdown, Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    value: "",
  };
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { users, authedUser } = this.props;
    const { value } = this.state;
    console.log(users);

    return (
      <Segment padded textAlign="center" size="large">
        <Header as="h2">
          Welacome to Would you rather application
          <Header.Subheader>please Login</Header.Subheader>
        </Header>
        <select className="ui search dropdown">
          <option value="">Select user</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
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
