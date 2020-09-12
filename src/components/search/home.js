import React, { useState, useEffect }  from "react";
// import logo from "./logo-nutella-s@3x.jpg";
import { Navbar, Nav, Image, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import profileImage from "../ProjectPage/profile.png";
// import "./navbar.css";
import Main from "./main"
import * as Actions from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
const Home = ({projectId}) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.project.projects);
const [title,setTitle] = useState("test")
const [id,setId] = useState(projectId)
  useEffect(() => {
    dispatch(Actions.getAllPorject(id));
  }, []);
console.log(menu)
  const handleSelect=(id)=>{
    console.log(id)
    // setTitle(dispatch(Actions.selectProject(id)))
    
    const first = menu.find(v => v.projectId === Number(id))
    
    setTitle(first.projectName)
   setId(id-1)
    console.log("titles",title)
  
  }
 

  return (
    <>
    <Navbar style={{ backgroundColor: "white" }} onSelect={handleSelect }>
      <Navbar.Brand href="/"></Navbar.Brand>

      <Image
        // src={logo}
        width="45rem"
        height="auto"
        className="d-inline-block align-top"
      />
      {/* href={`/main/:${v.projectId}`} */}
      <NavDropdown title={menu[id].projectName} id="nav-dropdown">
        
        {
          menu.map(v => (<NavDropdown.Item key={v.projectId} eventKey={v.projectId}>{v.projectName} </NavDropdown.Item>))
        }
      </NavDropdown>

      <Nav
        className="topnav col-sm-9 justify-content-center"
        activeKey="/workspace"
        style={{ fontWeight: "bold" }}
      >
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/home">
            OVERVIEW
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/workspace">WORKSPACE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/chart">REPORTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">HPO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">COMPRESSION</Nav.Link>
        </Nav.Item>
      </Nav>

      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link
            href="/project"
            style={{
              fontWeight: "bold",
              color: "#000000",
              marginRight: "0.2rem",
            }}
          >
            <Image
             // src={profileImage}
              width="40rem"
              height="auto"
              className="d-inline-block align-top"
            />
          </Nav.Link>
          <Nav.Link
            href="/project"
            style={{
              fontWeight: "bold",
              color: "black",
              marginTop: "0.7rem",
            }}
          >
            이해인{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    </>
  );
};

export default Home;
