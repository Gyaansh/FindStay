import { useEffect, useState } from 'react'
import Card from './Card';
const CardList = () => {
    let [userData , setUserData] = useState({data:[]})
    useEffect(()=>{
        fetch("/api/listing")
        .then((res)=> res.json())
        .then((res)=> setUserData(res))
        .catch((err) => console.log(err))
    },[]);

    return (
        <>
        <div className='bg-[#f5f5f5]'>
        <div className="p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-2   ">
            {userData.data.map((list)=>{
               return <Card key={list._id} list={list}/>
            })}
        </div>
        </div>
        </>
    )
}

export default CardList
