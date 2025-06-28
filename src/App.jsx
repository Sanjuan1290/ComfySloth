import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import HomeLayout from './ComfyLayout'
import Home from './Pages/Home'
import About from './Pages/About'


const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />}/>
        </Route>
    ))
    
    return(
        <RouterProvider router={router} />
    )
}

export default App