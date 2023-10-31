import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import { Image} from "../data/model/gallery.ts";
import axios from "axios";
const clientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID

type GalleryContextProviderProps = {
    children : ReactNode
}

type GalleryPicture = {
    SearchPicture : (input : string) => void,
    searchPictureResults : () => Image[]
    data : Image[];
}

const GAlleryContext = createContext({} as GalleryPicture)

export function useApi(){
    return useContext(GAlleryContext)
}

export function GalleryContextProvider({children} : GalleryContextProviderProps){
    const [data, setData] = useState<Image[]>([])
    const [input, setInput] = useState("All")
    const [searchResults, setSearchResults] = useState<Image[]>([])

    function GetPicture(input : string){
        return (
            axios.get(
                `https://api.unsplash.com/search/collections?client_id=${clientId}&per_page=50&query=${input}`
            )
        )

        /*return data.filter((item)=>{
           return searchParams.some((newItem ) =>{
               return (
                   item[newItem as keyof typeof item].toString().toLowerCase().indexOf(searchParam.toLowerCase())>-1
               )
           })
        })*/
    }



    useEffect(()=>{
        const FetchData = async () => {
            try {
                const response = await GetPicture(input);
                setData(response.data.results);
            }catch (err){
                console.log(err)
            }
        }
        FetchData();
    },[input])

    function SearchPicture(input : string){
        input?  setInput(input)  : " ALL";
        setSearchResults(data);
        console.log("searchResults",searchResults)
    }

    function searchPictureResults(){
        return searchResults
    }


    return(
        <GAlleryContext.Provider value={{data, SearchPicture, searchPictureResults}}>
            {children}
        </GAlleryContext.Provider>
    )
}