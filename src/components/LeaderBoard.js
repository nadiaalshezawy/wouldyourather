import React from "react";
import { connect } from "react-redux";
import { Table, Header, Image } from "semantic-ui-react";

class LeaderBoard extends React.Component {
  render() {
    const { usersIds, users } = this.props;
    /*
     <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22</Table.Cell>
      </Table.Row>
      */
    // const { name, id, avatarURL, answers, questions } = usersIds;
    console.log("leader board");
    console.log(usersIds);
    return (
      <div>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Questions asked</Table.HeaderCell>
              <Table.HeaderCell>Questions answered</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.usersIds.map((id) => (
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Image src={users[id].avatarURL} rounded size="mini" />
                    <Header.Content>{users[id].name}</Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{users[id].questions.length}</Table.Cell>
                <Table.Cell>{Object.keys(users[id].answers).length}</Table.Cell>
                <Table.Cell>
                  {users[id].questions.length +
                    Object.keys(users[id].answers).length}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = ({ users }) => {
  const IDs = Object.keys(users).sort((idA, idB) => {
    const sumA =
      Object.keys(users[idA].answers).length + users[idA].questions.length;
    const sumB =
      Object.keys(users[idB].answers).length + users[idB].questions.length;

    return sumB - sumA;
  });
  return {
    usersIds: IDs,
    users,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
