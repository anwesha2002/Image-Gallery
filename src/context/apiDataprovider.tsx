import {createContext,  ReactNode, useContext, useState} from "react";
import {Gallery, PopUpModalProps} from "../data/model/gallery.ts";
import {useFetchData} from "../data/remote/api.ts";

type GalleryContextProviderProps = {
    children : ReactNode
}

type GalleryPicture = {
    GetPicture : ( searchParam : string) => PopUpModalProps[],
    SearchPicture : (input : string) => void,
    //setInput : Dispatch<SetStateAction<string>>
    searchPictureResults : () => Gallery[]
}

const GAlleryContext = createContext({} as GalleryPicture)

export function useApi(){
    return useContext(GAlleryContext)
}

export function GalleryContextProvider({children} : GalleryContextProviderProps){
    const [searchParams] = useState(["alt_description"]);
    //const [input, setInput] = useState("")
    //const [data] = useFetchData<PopUpModalProps[]>(input,[]);
    const [searchResults, setSearchResults] = useState<PopUpModalProps[]>([])
    //setInput("cat")

    function GetPicture(searchParam : string){
        const [data] = useFetchData<PopUpModalProps[]>(searchParam,[]);
        return data.filter((item)=>{
           return searchParams.some((newItem ) =>{
               return (
                   item[newItem as keyof typeof item].toString().toLowerCase().indexOf(searchParam.toLowerCase())>-1
               )
           })
        })
    }

    function SearchPicture(input : string){
        const [data] = useFetchData<PopUpModalProps[]>(input,[]);
        const result = data.filter(item=>{
            return input && item && item.alt_description && item.alt_description.toLowerCase().includes(input);
        })
        setSearchResults(result);
        console.log(searchResults)
    }

    function searchPictureResults(){
        return searchResults
    }


    return(
        <GAlleryContext.Provider value={{GetPicture, SearchPicture, searchPictureResults}}>
            {children}
        </GAlleryContext.Provider>
    )
}