import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import './experience.css'

function Exp() {
    return (
      <div className = "experience-body">
        <h1>Experience</h1>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>IP-1:  Instruction Support for College of Education --- Current</Accordion.Header>
                <Accordion.Body>
                <Table responsive="sm">
                  <tbody>
                    <tr>
                      <tc>
                        <td><b>Location:</b> University of Rhode Island</td>
                      </tc>
                      <tc>
                        <td><b>Years Active:</b> June 2024 - Current</td>
                      </tc>
                      <tc>
                        <td><b>Industry:</b> Technology</td>
                      </tc>
                    </tr>
                    <tr>
                      <td><b>Responsibilities:</b> 
                        <ul>
                          <li>Trouble-shoot problems from faculty and staff </li>
                          <li>Assist co-workers to solve technical problems </li>
                          <li>Maintain asset database for college</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Target Team Member --- Current</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
    </Accordion>
      </div>
      
    );
  }
  
  export default Exp;