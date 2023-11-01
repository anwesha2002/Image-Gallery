import './App.css'
import {Home} from "./ui/Pages/home.tsx";
import {GalleryContextProvider} from "./ui/Context/ImageProvider.tsx";

function App() {

  return (
    <GalleryContextProvider>
      <Home/>
    </GalleryContextProvider>
  )
}

export default App
