
function Button({ value, icon, onClick }){
    return (
        <button className="toggle" onClick={onClick} title={value}>
            {value}
        </button>
    )
};


export default Button;