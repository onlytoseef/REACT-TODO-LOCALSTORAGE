import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Index() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}