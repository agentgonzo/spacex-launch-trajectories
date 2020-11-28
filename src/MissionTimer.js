import React, {useEffect, useState} from "react";

export const MissionTimer = () => {
    const [running, setRunning] = useState(false)
    const [met, setMet] = useState(-10)

    useEffect(() => {
        if(running) {
            const interval = setInterval(() => {
                setMet(seconds => seconds + 0.1);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [running, met]);

    return {
        met,
        setTimerRunning: setRunning
    }
}