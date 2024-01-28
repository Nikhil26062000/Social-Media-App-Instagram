import React, { useEffect } from 'react'

const HomePageHeader = () => {
    useEffect(()=>{
        getData();
    },[]);

    const getData = async () => {
        try {
            const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos", {
                method: 'GET'
            });
    
            if (!response.ok) {
                // Check if the response status is OK
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

  return (
    <div>
        <h1>this is header</h1>
    </div>
  )
}

export default HomePageHeader