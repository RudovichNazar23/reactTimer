
function TimersList({ children }){
    return (
        <div className="container m-auto d-flex flex-column align-items-center justify-content-between">
            {
                children.map(
                    (child) => child
                )
            }
        </div>
    )
};


export default TimersList;