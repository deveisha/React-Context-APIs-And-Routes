import React from 'react'

const Cards = ({userData}) => {
  return (
    <div>
    {/* {userData && userData} */}
    <h1> USERS API</h1>
    {userData?.map((user, id) => (
  <div style={{display:'inline-flex',justifyContent:'space-between'}}>    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-6 h-59 w-48" style={{justifyContent:'space-between,'}}>
    <a href="#">
        <img class="rounded-t-lg" src={user.avatar_url} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
        userName:
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.login}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ID:{user.id}</p>
    </div>
</div>
</div>
    
      
    ))}
    </div>

);
};

export default Cards
