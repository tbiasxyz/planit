import Table from "../../ui/Table";
import Dots from "../../ui/Dots";
import ProjectTag from "./ProjectTag";
import ProjectUsers from "./ProjectItemUsers";
import ProjectProgressBar from "./ProjectProgressBar";

function ProjectsTable() {
  return (
    <Table columns="0.675fr 0.5fr 0.4fr 0.5fr 0.5fr 0.65fr 0.5fr 0.4fr 0.1fr">
      <Table.Header>
        <Table.Row>
          <Table.Data>Project Name</Table.Data>
          <Table.Data>Project Type</Table.Data>
          <Table.Data>Status</Table.Data>
          <Table.Data>Started</Table.Data>
          <Table.Data>Finished</Table.Data>
          <Table.Data>Progress</Table.Data>
          <Table.Data>Priority</Table.Data>
          <Table.Data>Participants</Table.Data>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Data>UIX Ninja</Table.Data>
          <Table.Data>Development</Table.Data>
          <Table.Data>
            <ProjectTag tag="Finished" color="finished" type="status" />
          </Table.Data>
          <Table.Data>1. 9. 2023</Table.Data>
          <Table.Data>11. 9. 2023</Table.Data>
          <Table.Data>
            <ProjectProgressBar progress={100} />
          </Table.Data>
          <Table.Data>&mdash;</Table.Data>
          <Table.Data>
            <ProjectUsers>
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="user"
              />
              <img
                src="https://dr.savee-cdn.com/things/6/5/2ff05e229b1a53b40edbe2.webp"
                alt="user"
              />
            </ProjectUsers>
          </Table.Data>
          <Table.Data>
            <Dots top={50} right={1} type="project" />
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>Musify</Table.Data>
          <Table.Data>Development</Table.Data>
          <Table.Data>
            <ProjectTag tag="Active" color="active" type="status" />
          </Table.Data>
          <Table.Data>3. 7. 2023</Table.Data>
          <Table.Data>&mdash;</Table.Data>
          <Table.Data>
            <ProjectProgressBar progress={30} />
          </Table.Data>
          <Table.Data>
            <ProjectTag tag="Low priority" color="low" type="priority" />
          </Table.Data>
          <Table.Data>
            <ProjectUsers>
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="user"
              />
              <img
                src="https://dr.savee-cdn.com/things/6/5/2ff05e229b1a53b40edbe2.webp"
                alt="user"
              />
            </ProjectUsers>
          </Table.Data>
          <Table.Data>
            <Dots top={50} right={1} type="project" />
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>QuizNet</Table.Data>
          <Table.Data>Development</Table.Data>
          <Table.Data>
            <ProjectTag tag="Active" color="active" type="status" />
          </Table.Data>
          <Table.Data>1. 11. 2023</Table.Data>
          <Table.Data>&mdash;</Table.Data>
          <Table.Data>
            <ProjectProgressBar progress={10} />
          </Table.Data>
          <Table.Data>
            <ProjectTag tag="High priority" color="high" type="priority" />
          </Table.Data>
          <Table.Data>
            <ProjectUsers>
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="user"
              />
              <img
                src="https://dr.savee-cdn.com/things/6/5/2ff05e229b1a53b40edbe2.webp"
                alt="user"
              />
            </ProjectUsers>
          </Table.Data>
          <Table.Data>
            <Dots top={50} right={1} type="project" />
          </Table.Data>
        </Table.Row>

        <Table.Row>
          <Table.Data>Finance tracker</Table.Data>
          <Table.Data>Development</Table.Data>
          <Table.Data>
            <ProjectTag tag="TBD" color="tbd" type="status" />
          </Table.Data>
          <Table.Data>&mdash;</Table.Data>
          <Table.Data>&mdash;</Table.Data>
          <Table.Data>
            <ProjectProgressBar progress={0} />
          </Table.Data>
          <Table.Data>
            <ProjectTag tag="Normal priority" color="normal" type="priority" />
          </Table.Data>
          <Table.Data>
            <ProjectUsers>
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="user"
              />
              <img
                src="https://dr.savee-cdn.com/things/6/5/2ff05e229b1a53b40edbe2.webp"
                alt="user"
              />
            </ProjectUsers>
          </Table.Data>
          <Table.Data>
            <Dots top={50} right={1} type="project" />
          </Table.Data>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
