import Row from "../ui/Row";
import Table from "../ui/Table";
import ToggleView from "../ui/ToggleView";

function Users() {
  return (
    <>
      <Row>
        <ToggleView />
        <span>Filter</span>
      </Row>
      <Table columns="3rem 1fr 0.5fr 0.5fr 0.5fr 0.5fr">
        <Table.Header>
          <Table.Row>
            <Table.Data>Name</Table.Data>
            <Table.Data>Status</Table.Data>
            <Table.Data>Joined</Table.Data>
            <Table.Data>Location</Table.Data>
            <Table.Data>Joined</Table.Data>
            <Table.Data>E-Mail</Table.Data>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Data>20</Table.Data>
            <Table.Data>20</Table.Data>
            <Table.Data>20</Table.Data>
            <Table.Data>20</Table.Data>
            <Table.Data>20</Table.Data>
            <Table.Data>20</Table.Data>
          </Table.Row>

          <Table.Row>
            <Table.Data>30</Table.Data>
            <Table.Data>30</Table.Data>
            <Table.Data>30</Table.Data>
            <Table.Data>30</Table.Data>
            <Table.Data>30</Table.Data>
            <Table.Data>30</Table.Data>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default Users;
