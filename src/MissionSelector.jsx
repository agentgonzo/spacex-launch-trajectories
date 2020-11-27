import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import React, { useState } from 'react';

const MissionSelector = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const missions = ['DM1', 'CREW-1'];

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select Mission
      </DropdownToggle>
      <DropdownMenu>
        {missions.map((mission) => <DropdownItem>{mission}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MissionSelector;
