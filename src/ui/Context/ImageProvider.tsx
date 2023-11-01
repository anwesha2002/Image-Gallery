import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import { Image} from "../../data/Model/Gallery.ts";
import {useFetchData} from "../../data/Remote/FetchApiData.tsx";

type GalleryContextProviderProps = {
    children : ReactNode
}

type GalleryPicture = {
    searchQuery : string
    data : Image[];
    setSearchQuery : Dispatch<SetStateAction<string>>
}

const GAlleryContext = createContext({} as GalleryPicture)

export function useApi(){
    return useContext(GAlleryContext)
}

export function GalleryContextProvider({children} : GalleryContextProviderProps){
    const [data, setData] = useState<Image[]>([])
    const [searchQuery, setSearchQuery] = useState("")

    function GetPicture(input : string) {
        return (
            useFetchData(input)
        )
    }

    useEffect(()=>{
        const FetchData = setTimeout(async ()=>{
            try {
                const response =  await GetPicture(searchQuery);
                setData(response.data.results);
            }catch (err){
                console.log(err)
            }
        }, 500)
        return () => clearTimeout(FetchData);
    },[searchQuery])

    return(
        <GAlleryContext.Provider value={{data, searchQuery, setSearchQuery}}>
            {children}
        </GAlleryContext.Provider>
    )
}