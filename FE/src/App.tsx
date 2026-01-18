// App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header/index';
import Footer from './components/layout/Footer/index';
import SideBar from './components/layout/SideBar/index';
import AppRouter from './routers/App.routers';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <SideBar />
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
