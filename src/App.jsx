import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import './App.css'
import About from './Components/About/About';
import { Footer } from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
 

let x = createBrowserRouter([{
  path:'',
  element : <Layout />,
  children:[{
    index : true,
    element : <Home />
  },
  {
    path : 'about',
    element : <About />
  },
  {
    path : 'portfolio',
    element : <Portfolio />
  },
  {
    path : 'contact',
    element : <Contact />
  },
 
]
}])
function App() {
  

  return (
    <>
     <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
