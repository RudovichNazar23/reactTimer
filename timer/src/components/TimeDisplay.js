import Number from "./Number";

function TimeDisplay({ time }){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <ul className="parts">
            <Number value={minutes} label={"Minutes"} />
            <li className="colon">:</li>
            <Number value={seconds} label={"Seconds"} />
        </ul>
    );  
};

export default TimeDisplay;