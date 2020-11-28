import React, {useState} from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'

const MissionSelector = () => {
    const missions = [
        {
            'key': 'dm1',
            'title': "Demo-1",
            'launch': '2019-03-02T07:49:03Z',
        },
        {
            'key': 'dm2',
            'title': "Demo-2",
            'launch': '2020-05-30T19:22:45Z',
        },
        {
            'key': 'crew-1',
            'title': " Crew-1",
            'launch': '2020-11-16T00:27:17Z'
        },
    ]

    const [value, setValue] = useState(missions[0])

    const handleSelect = (missionKey) => {
        console.log(missionKey);
        setValue(missionKey = missions.filter(mission => mission.key === missionKey)[0])
    }

    return {
        mission: value, selector: (
                <DropdownButton title={value.title} onSelect={handleSelect}>
                    {missions.map(mission => <Dropdown.Item key={mission.key} eventKey={mission.key}>{mission.title}</Dropdown.Item>)}
                </DropdownButton>
        )
    };
};

export default MissionSelector;
