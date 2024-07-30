import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
    return (
        <BrowserRouter>
            <header className="w-full h-[60px] flex justify-between items-center bg-white sm:px-8 px-4 py-5 border-b border-b-[#e6ebf4]">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-28 object-contain"/>
                </Link>
                <Link to="/create-post" className="font-inter font-medium bg-accent text-white px-4 py-2 rounded-md">
                    Create
                </Link>
            </header>
            <main className="sm:p8 px-4 py-8 w-full bg-lightgrey min-h-[calc(100svh-73px)]">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/create-post" element={<CreatePost/>}></Route>
                </Routes>
            </main>

        </BrowserRouter>
    )
}
export default App
