import React from "react";
import "./index.css";

import Timer from "./components/Timer";

function App() {
  return (
    <div className="container m-auto p-3 d-flex flex-column align-items-center justify-content-between">
        {/* <Button value={"Start"} icon={"/stopwatch.png"} />
        <Button value={"Stop"} icon={"/pause.png"} />
        <Button value={"Continue"} icon={"/next.png"} />
        <Button value={"Delete"} icon={"/delete.png"} /> */}
        <h2 className="text-light text-center">COUNTDOWN</h2>
        <Timer startTime={10} />
    </div>
  );
}

export default App;
