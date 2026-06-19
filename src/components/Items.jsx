import React, { useEffect, useState } from 'react'
import biryani from '../assets/Biryani.png'
import { Plus } from 'lucide-react'
import api from '../api/axios'
const Items = ({ setOpenModel, setModel }) => {

    const [ items,setItems ] = useState([])

    const get_items=async()=>{
        try{
            const response = await api.get('food-items/')
            console.log(response.data);
            setItems(response.data)
        }catch(error){
            console.error(error.response.data);
        }
    }

    useEffect(()=>{
        get_items()
    },[])

    return (
        <>
            <div className=' my-4'>
                <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                    

                </div>
            </div>
        </>
    )
}

export default Items