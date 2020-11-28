import React, {useEffect, useState} from "react";

export const MissionTimer = (running) => {
    const [met, setMet] = useState(-10)

    useEffect(() => {
        if(running) {
            const interval = setInterval(() => {
                setMet(seconds => seconds + 0.1);
            }, 100);
            return () => clearInterval(interval);
        }
    }, [met]);

    return {
        met,
        timer: (<p>T: {met.toFixed(1)}s</p>)
    }
}