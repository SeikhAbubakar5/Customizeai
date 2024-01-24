import React, { useEffect, useState } from 'react';
import axios from "axios";

const FetchUser = () => {
const [user, setUser]=useState([]);
   const getUser =async ()=>{
    try {
        const response = await axios.get('https://api.github.com/users', {
      headers: {
        Authorization: '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',
      },
    });
        setUser(response.data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
        
   }
   useEffect(()=>{
    getUser()
   },[])
  return (
    <>
      <div className="container-fluid mt-5">
            <div className="row text-center">

                {
                    user.map((elem)=>{
                        return(
                            <div className="col-12 col-md-6 mt-5" key={elem.id}>
                    <div className='card p-2'>
                    <div className="d-flex align-items-center">
                    <div className="image">
                        <img src={elem.avatar_url} alt="" className="rounded-circle" width="155"/>
                    </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0 textLeft">{elem.login}</h4>
                        <span className="textLeft">{elem.followers_url}</span>
                    </div>
                    </div>

                    </div>
                </div>
                        )
                    })
                }
            </div>
      </div>
    </>
  );
}

export default FetchUser;
