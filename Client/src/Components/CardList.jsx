import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Card from './Card';
const CardList = () => {
    let [userData , setUserData] = useState({data:[]})
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const type = searchParams.get('type') || 'place';

    useEffect(()=>{
        const url = search ? `/api/listing?search=${encodeURIComponent(search)}&type=${type}` : "/api/listing";
        fetch(url)
        .then((res)=> res.json())
        .then((res)=> setUserData(res))
        .catch((err) => console.log(err))
    },[search, type]);

    return (
        <>
        <div className='bg-[#f2ede9]'>
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
