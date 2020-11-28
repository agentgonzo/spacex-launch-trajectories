import React, {useState} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

const MissionSelector = (initialMission) => {
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

    const getMissionByKey = (missionKey => missions.filter(mission => mission.key === missionKey)[0])
    const [mission, setValue] = useState(getMissionByKey(initialMission))

    const selectMission = (missionKey) => {
        console.log(missionKey);
        setValue(getMissionByKey(missionKey))
    }

    return {
        mission, selector: (
                <NavDropdown title={mission.title} onSelect={selectMission}>
                    {missions.map(mission => <NavDropdown.Item
                            key={mission.key}
                            eventKey={mission.key}
                            href={`#${mission.key}`}>
                        {mission.title}
                    </NavDropdown.Item>)}
                </NavDropdown>
        )
    };
};

export default MissionSelector;
