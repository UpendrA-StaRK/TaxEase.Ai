import WithSubnavigation from "./Navitem"
import {
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Divider,
    Link,
} from '@chakra-ui/react'


import styled from "styled-components"
// import { hover } from "@testing-library/user-event/dist/hover"


function Navbar() {
  return (
    <DIV>
      <div className="navbar">
        <WithSubnavigation />
        <div className="side-icon"></div>
      </div>
    </DIV>
  );
}

export default Navbar;

const DIV = styled.div`
  .navbar {
    width: 100%;
    position: fixed;
    z-index: 100;
    top: 0;/* Google Grey */
    color: white;
  }

  .sideconnectiondiv:hover {
    transform: scaleX(1.2);
    cursor: pointer;
  }
`;
