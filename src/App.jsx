import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import HomeLayout from './ComfyLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'


const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />}/>
        </Route>
    ))
    
    return(
        <RouterProvider router={router} />
    )
}

export default App