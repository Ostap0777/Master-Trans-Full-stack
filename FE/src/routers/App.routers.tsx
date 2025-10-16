import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/index'
import LoginPage from '../pages/LoginPage/index'
import AuthPage from '../pages/AuthPage/index'

function ProtectedRoute({ isAuth, children }) {
	if (!isAuth) {
	  return <Navigate to="/login" replace />;
	}
	return children;
 }
 
 function AppRouter() {
	const [isAuth, setIsAuth] = useState(false);
	console.log("isAuth:", isAuth);
 
	return (
	  <BrowserRouter>
		 <Routes>
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
			<Route
			  path="/home"
			  element={
				 <ProtectedRoute isAuth={isAuth}>
					<HomePage setIsAuth={setIsAuth}/>
				 </ProtectedRoute>
			  }
			/>
			<Route path="*" element={<Navigate to="/login" />} />
		 </Routes>
	  </BrowserRouter>
	);
 }
 
 export default AppRouter;
 