import React from 'react'
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Home from './Pages/Home.jsx'; // Adjust the path as needed
import Workstation from './Pages/Workstation.jsx';


const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Home />} />
    <Route path="/workstation" element={<Workstation />} />

    </>
  ))
  return (
  <RouterProvider router={router}/>
  )

};

export default App;










// import React from 'react'
// import Navbar from './components/Navbar'
// import Body from './components/Body'

// const App = () => {
//   return (
// <>

//       <Navbar />
//       <Body/>

// </>
//   )
// }

// export default App