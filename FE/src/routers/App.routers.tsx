import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/index'
import LoginPage from '../pages/LoginPage/index'
import AuthPage from '../pages/AuthPage/index'

function AppRouter() {
  return (
	<BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
		<Route path="/auth" element={<AuthPage />} />
		</Routes>
		</BrowserRouter>
  )
}

export default AppRouter
