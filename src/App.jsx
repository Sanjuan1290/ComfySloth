import { 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from 'react-router-dom'

import HomeLayout from './ComfyLayout'
import Home from './Pages/Home'


const App = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home />} />

        </Route>
    ))
    
    return(
        <RouterProvider router={router} />
    )
}

export default App