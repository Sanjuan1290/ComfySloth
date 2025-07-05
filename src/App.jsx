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
import Cart from './Pages/Cart'
import Login from './Pages/Login'

import { loader as ProductsLoader } from './Pages/Products'
import { loader as ProductLoader } from './Pages/Product'

const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<ComfyLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />} loader={ProductsLoader}/>
            <Route path='/products/:id' element={<Product />} loader={ProductLoader}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
        </Route>
    ))
    
    return(
        <RouterProvider router={router} />
    )
}

export default App