import axios from "axios";
import {useEffect, useState} from "react";
const clientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID

export function useFetchData<T,>(initialState : T | (()=>T)) {
    const [data, setData] = useState<T>(initialState)

    useEffect(() => {
        const FetchData = async () => {
            try{
                const response = await axios.get(
                    `https://api.unsplash.com/photos?topic&client_id=${clientId}`
                )
                setData(response.data)
            }catch (err){
                console.log(err)
            }
        }
        FetchData()
    }, []);
    return [data];
}




