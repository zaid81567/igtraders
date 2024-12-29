import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const route = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <ScrollToTop/>
            <Header />
            <HomePage />
            <Footer />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <ScrollToTop/>
            <Header />
            <AboutPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/services",
        element: (
          <>
            <ScrollToTop/>
            <Header />
            <ServicesPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            
            <ScrollToTop/>
            <Header />
            <ContactPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/*",
        element: <NoPage />,
      },
    ]);

  return (
    <div>
      <RouterProvider router={route}/>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      // transition={ounce}
      />
    </div>
  );
}

export default App
