import React from "react";
import { connect } from "react-redux";
import { Button, Form, Header, Segment, Divider } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
class AddQuestion extends React.Component {
  state = {
    optionOne: " ",
    optionTwo: " ",
    toHome: false,
  };

  handleChange = (e) => {
    const text = e.target.value;
    const option = e.target.name;

    this.setState(() => ({
      [option]: text,
    }));

    console.log(text);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo));

    console.log("New Tweet: ", optionOne, optionTwo);

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    }));
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;
    if (toHome === true) {
      // this.setState(toHome:false);
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Segment color="violet">
          <Header as="h3">Add New Question</Header>
        </Segment>
        <Segment>
          <Form.Field>
            <label>Option One</label>
            <input
              placeholder="option one"
              onChange={this.handleChange}
              value={this.optionOne}
              name="optionOne"
            />
          </Form.Field>
          <Divider section />
          <Form.Field>
            <label>Option Two</label>
            <input
              placeholder="option two"
              onChange={this.handleChange}
              value={this.optionTwo}
              name="optionTwo"
            />
          </Form.Field>
          <Form.Field></Form.Field>
        </Segment>
        &nbsp;
        <Button type="submit" disabled={optionOne === "" || optionTwo === ""}>
          Submit
        </Button>
        <Button negative>Cancel</Button>
      </Form>
    );
  }
}

export default connect()(AddQuestion);
