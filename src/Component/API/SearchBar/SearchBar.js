import React, { useEffect, useState } from 'react'

function SearchBar({handleFormSubmit}) {

    const [submitData, setSubmitData] = useState();

    const changeSubmitData = (e) => {
        setSubmitData(e.target.value);
    }

    useEffect(()=>{
        handleFormSubmit("videos");   
    },[])

    const handleSubimt = (e) => {
        e.preventDefault();
        handleFormSubmit(submitData);
        document.querySelector("#search").value="";
    }

    

    return (
        <div>
            <form onSubmit={handleSubimt}>
                <input id="search" type="text" onChange={changeSubmitData} placeholder="Search video..."></input>
            </form>
        </div>
    )
}

export default SearchBar
