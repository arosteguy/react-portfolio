import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const HeaderFooter = (props) {
    return 
    <ButtonDropdown isOpen={isOpen} toggle={toggle}>
  <DropdownToggle caret color="primary">
    Text
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
 </DropdownMenu>
    
    
</ButtonDropdown>
} 

export default HeaderFooter;