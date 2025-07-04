import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import ComfyLayout from './Layouts/ComfyLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Product from './Pages/Product'
import Login from './Pages/Login'

import { loader as ProductsLoader } from './Pages/Products'

const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<ComfyLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />} loader={ProductsLoader}/>
            <Route path='/products/:id' element={<Product />}/>
            <Route path='/login' element={<Login />} />
        </Route>
    ))
    
    return(
        <RouterProvider router={router} />
    )
}

export default App