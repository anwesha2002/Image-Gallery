import './App.css'
import {Home} from "./ui/pages/home.tsx";
import {GalleryContextProvider} from "./context/apiDataprovider.tsx";

function App() {

  return (
    <GalleryContextProvider>
      <Home/>
    </GalleryContextProvider>
  )
}

export default App
