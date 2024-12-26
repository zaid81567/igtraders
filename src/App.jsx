import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const route = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
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
            <Header />
            <AboutPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
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
    </div>
  );
}

export default App
