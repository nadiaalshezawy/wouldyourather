import React from "react";
import { connect } from "react-redux";
import { Form, Checkbox } from "semantic-ui-react";
/*
state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Choose this'
            name='checkboxRadioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Or that'
            name='checkboxRadioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )*/

class UnAnsweredQuestion extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
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
            value={optionOne.text}
            checked={this.state.value === optionOne.text}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label={optionOne.text}
            name="checkboxRadioGroup"
            value={optionTwo.text}
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
    // author: question ? users[question.author] : null,
    // authedUser,
  };
};

export default connect(mapStateToProps)(UnAnsweredQuestion);

/*
 render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;
    return (
      <div>
        <div class="ui form">
          <div class="grouped fields">
            <label>Would You Rather</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" />
                <label>{optionOne.text}</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" />
                <label>{optionTwo.text}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  */
