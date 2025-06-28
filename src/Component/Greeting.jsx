import React from "react";
const Greet = () => {
    const Message = "hello beautiful lady,good noon morning";
    const Data = "9 April january 2025"
    const Name = "Amar matha"
    const currentDate = new Date().toLocaleDateString();
    return (
        <div>
            <h1>Element that dynamically displays a greeting message {Message}</h1>
            <p>Displays the current date {Data}</p>
            <p>{Name}</p>
            <h2>todays Date is :{currentDate}</h2>

        </div>
    )

}

export default Greet