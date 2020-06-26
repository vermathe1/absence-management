import React from 'react';
import axios from 'axios'

export const Home = () => {
    React.useEffect(()=>{
         axios.get(`http://localhost:3000/getLeavesList`).then(response => console.log(true))
    },[])
    return(
        <div>Home</div>
    )
}