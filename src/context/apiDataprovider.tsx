import {createContext, ReactNode, useContext, useState} from "react";
import {Gallery} from "../data/model/gallery.ts";

type GalleryContextProviderProps = {
    children : ReactNode
}

type GalleryPicture = {
    getPicture : (item : Gallery[], searchParam : string) => Gallery[]
}

const GAlleryContext = createContext({} as GalleryPicture)

export function useApi(){
    return useContext(GAlleryContext)
}

export function GalleryContextProvider({children} : GalleryContextProviderProps){
    const [searchParams] = useState(["alt_description"]);

    function getPicture(data : Gallery[], searchParam : string){
        const items = Object.values(data)
        return items.filter((item)=>{
           return searchParams.some((newItem ) =>{
               return (
                   item[newItem as keyof typeof item].toString().toLowerCase().indexOf(searchParam.toLowerCase())>-1
               )
           })
        })
    }


    return(
        <GAlleryContext.Provider value={{getPicture}}>
            {children}
        </GAlleryContext.Provider>
    )
}