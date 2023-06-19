import { useState } from "react";



const MyClock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return <h1>{time}</h1>;

}


export default MyClock;