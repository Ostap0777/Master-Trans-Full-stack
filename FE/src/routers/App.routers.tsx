import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/index'
import LoginPage from '../pages/LoginPage/index'
import AuthPage from '../pages/AuthPage/index'
import CreateItemsPage from '../pages/CreateItemPage/index';

function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AppRouter() {
	const [isAuth, setIsAuth] = useState(false);
 
	if (!isAuth) {
	  return (
		 <Routes>
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
			<Route path="*" element={<Navigate to="/login" />} />
		 </Routes>
	  );
	}
 
	return (
	  <Routes>
		 <Route
			path="/home"
			element={
			  <ProtectedRoute isAuth={isAuth}>
				 <HomePage setIsAuth={setIsAuth} />
			  </ProtectedRoute>
			}
		 />
		 <Route
			path="/customer/settings/my-orders"
			element={
			  <ProtectedRoute isAuth={isAuth}>
				 <CreateItemsPage setIsAuth={setIsAuth} />
			  </ProtectedRoute>
			}
		 />
		 <Route path="*" element={<Navigate to="/home" />} />
	  </Routes>
	);
 }
 

export default AppRouter;
