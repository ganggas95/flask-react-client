import React from "react";

const Home = () => {
    return <div>
        <div>I'am is Home Component</div>
        <button onClick={()=>{
            alert("Opps..!!, You click me");
        }}>Click Me</button>
    </div>
}

export default Home;