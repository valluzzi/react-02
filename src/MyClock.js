import { useState } from "react";



const MyClock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return <>
        <h3>This example uses the useState hook to create a clock that updates every second.</h3>
        useState and setInterval
        <h1>{time}</h1>
    </>;

}


export default MyClock;