import React from "react";
import { connect } from "react-redux";
import Question from "./Question";

class DashBoard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>questions</h3>
        <ul>
          {this.props.questionIds.map((id) => (
            <div key={id}>
              <Question id={id} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}
export default connect(mapStateToProps)(DashBoard);
