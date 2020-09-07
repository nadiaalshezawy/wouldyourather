import React from "react";
import { connect } from "react-redux";
import { Form, Checkbox } from "semantic-ui-react";
import { handleQuestionAnswer } from "../actions/questions";

class UnAnsweredQuestion extends React.Component {
  state = {};
  handleChange = (e, { value }) => {
    console.log(value);
    e.preventDefault();
    this.setState({ value });

    const { dispatch, question, authedUser } = this.props;
    console.log(authedUser);
    dispatch(
      handleQuestionAnswer({
        qid: question.id,
        authedUser: authedUser,
        answer: value,
      })
    );
  };
  render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;
    return (
      <Form>
        <Form.Field>
          Would You Rather <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={optionOne.text}
            name="checkboxRadioGroup"
            value="optionOne"
            checked={this.state.value === optionOne.text}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={optionTwo.text}
            name="checkboxRadioGroup"
            value="optionTwo"
            checked={this.state.value === optionTwo.text}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    );
  }
}

const mapStateToProps = ({ questions }, { id }) => {
  // console.log(state);
  const question = questions[id];

  console.log(question);
  return {
    question: question ? question : null,
  };
};

export default connect(mapStateToProps)(UnAnsweredQuestion);
