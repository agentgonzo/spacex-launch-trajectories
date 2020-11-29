import React, {useEffect, useState} from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from 'prop-types'

const missions = [
    {
        'key': 'dm1',
        'title': "Demo-1",
        'launch': '2019-03-02T07:49:03Z',
        'video': 'https://www.youtube.com/watch?v=2ZL0tbOZYhE&feature=youtu.be&t=2931'
    },
    {
        'key': 'dm2',
        'title': "Demo-2",
        'launch': '2020-05-30T19:22:45Z',
        'video': 'https://www.youtube.com/watch?v=xY96v0OIcK4&feature=youtu.be&t=15756'
    },
    {
        'key': 'crew-1',
        'title': " Crew-1",
        'launch': '2020-11-16T00:27:17Z',
        'video': 'https://www.youtube.com/watch?v=E_FIaPBOJgc&feature=youtu.be&t=15150'
    },
]

export const getMissionByKey = (missionKey => missions.filter(mission => mission.key === missionKey)[0])

export const useMissionTimer = () => {
    const [startTime, setStartTime] = useState(null)
    const [pauseTime, setPauseTime] = useState(null)
    const [running, setRunning] = useState(false)
    const [met, setMet] = useState(0)

    const start = () => {
        if(startTime == null) {
            setStartTime(Date.now())
        }
        if(pauseTime) {
            // We've previously paused the timer, so we need to reset the start time to take account of the pause
            const pauseDuration = Date.now() - pauseTime
            setStartTime(startTime + pauseDuration)
        }
        setRunning(true)
    }

    const pause = () => {
        setPauseTime(Date.now())
        setRunning(false)
    }

    const reset = () => {
        setStartTime(null)
        setPauseTime(null)
        setRunning(false)
        setMet(0)
    }

    useEffect(() => {
        if(running) {
            const interval = setInterval(() => {
                setMet(Date.now() - startTime)
            }, 100);
            return () => clearInterval(interval);
        }
    }, [running]);

    return {
        start,
        pause,
        reset,
        met: met - 10000 // milliseconds
    }
}

const MissionSelector = (props) => {
    const selectMission = (missionKey) => {
        props.onChange(getMissionByKey(missionKey))
    }

    return <NavDropdown title={props.mission.title} onSelect={selectMission}>
        {missions.map(mission => <NavDropdown.Item
                key={mission.key}
                eventKey={mission.key}
                href={`#${mission.key}`}>
            {mission.title}
        </NavDropdown.Item>)}
    </NavDropdown>
}
MissionSelector.propTypes = {
    mission: PropTypes.object,
    onChange: PropTypes.func,
}

export default MissionSelector;
