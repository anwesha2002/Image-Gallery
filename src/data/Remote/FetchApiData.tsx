import axios from "axios";
const clientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID

export function useFetchData(searchQuery :string) {
    return(
            axios.get(
            `https://api.unsplash.com/search/collections?client_id=${clientId}&per_page=50&query=${searchQuery? searchQuery : "All"}`
            )
    )
}






