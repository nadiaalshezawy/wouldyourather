import React from "react";
import { Button, Form, Header, Segment, Divider } from "semantic-ui-react";

class AddQuestion extends React.Component {
  state = {
    optionOne: " ",
    optionTwo: " ",
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

    console.log("New Tweet: ", optionOne, optionTwo);

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
  };

  render() {
    const { optionOne, optionTwo } = this.state;
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
        <Button type="submit" disabled={optionOne === "" || optionTwo === ""}>
          Submit
        </Button>
        <Button negative>Cancel</Button>
      </Form>
    );
  }
}

export default AddQuestion;
