import './App.css'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Shop from '../Shop/Shop'
import News from '../News/News'
import ModalMenu from '../Modal/Modal'
import LoadScreen from '../LoadScreen/LoadScreen'
import {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenu, setIsMenu] = useState(false)
  console.log(isMenu)

  useEffect(() => {
    const timer = setTimeout(() => {setIsLoading(false)}, 1000)
    return () => clearTimeout(timer)
  }, [])

  if(isLoading) {
    return <LoadScreen></LoadScreen>
  }

  return (
    <BrowserRouter>
        {isMenu ? (
            <ModalMenu burgerFunc={() => setIsMenu(false)} />
        ) : (
            <>
                <Header burgerFunc={() => setIsMenu(true)} />
                {/* Налаштування маршрутизації */}
                <Routes>
                    <Route path="./" element={<Content />} />
                    <Route path="./news" element={<News />} />
                    <Route path="./shop" element={<Shop />} />
                </Routes>
                <Footer/>
            </>
        )}
    </BrowserRouter>
);
}
