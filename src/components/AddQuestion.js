import React from "react";
import { Button, Form, Header, Segment, Divider } from "semantic-ui-react";

class AddQuestion extends React.Component {
  state = {
    optionOne: " ",
    optionTwo: " ",
  };

  handleChangeOne = (e) => {
    const optionOne = e.target.value;

    this.setState(() => ({
      optionOne,
    }));

    console.log(optionOne);
  };

  handleChangeTwo = (e) => {
    const optionTwo = e.target.value;

    this.setState(() => ({
      optionTwo,
    }));

    console.log(optionTwo);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { optionOne, optionTwo } = this.state;
    // this.setState(() => {
    //   optionOne, optionTwo;
    // });
  };

  render() {
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
              onChange={this.handleChangeOne}
              value={this.optionOne}
            />
          </Form.Field>
          <Divider section />
          <Form.Field>
            <label>Option Two</label>
            <input
              placeholder="option two"
              onChange={this.handleChangeTwo}
              value={this.optionTwo}
            />
          </Form.Field>
          <Form.Field></Form.Field>
        </Segment>
        <Button type="submit">Submit</Button>
        <Button negative>Cancel</Button>
      </Form>
    );
  }
}

export default AddQuestion;
