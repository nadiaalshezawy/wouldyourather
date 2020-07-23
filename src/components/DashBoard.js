import React from "react";
import { connect } from "react-redux";

class DashBoard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>questions</h3>
        <ul>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <div>Question ID:{id}</div>
            </li>
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
