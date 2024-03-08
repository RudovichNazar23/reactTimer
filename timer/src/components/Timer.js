import {useState, useEffect} from "react";


import Button from "./Button";
import TimeDisplay from "./TimeDisplay";


function Timer({ startTime }){
    const [remaining, setRemaining] = useState(startTime);
    const [isRunning, setRunning] = useState(false);
    const play = () =>  setRunning(true);
    const pause = () =>  setRunning(false);

    useEffect(
        () => {
            if(!isRunning) return;
            
            function tick(){
                setRemaining(
                    (oldValue) => {
                        const value = oldValue - 1;

                        if(value <= 0){
                            setRunning(false);
                            return startTime;
                        }
                        return value;
                    }
                )
            }
            const interval = setInterval(tick, 1000);
            return () => clearInterval(interval);
        }, [isRunning, startTime]
    );


    return (
        <section className={`timer ${isRunning ? 'timer-ticking' : ''}`}>
            <TimeDisplay time={remaining} />
            {
                !isRunning ? <Button value={"Play"} onClick={play}/> : <Button value={"Pause"} onClick={pause} />
            }
        </section>
    )
};


export default Timer;