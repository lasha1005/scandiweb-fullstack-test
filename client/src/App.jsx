import './App.css'
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider } from '@apollo/client'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Navigate } from 'react-router-dom'
import Products from './Pages/ProductsPage/Products'
import Layout from './components/layout/Layout'
import ProductDetails from './Pages/ProductDetailsPage/ProductDetails'
import ErrorPage from './Pages/ErrorPage'
import { CartProvider } from './context/CartContext'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Navigate to="/category/all"/>} />
    <Route path='category/:name' element={<Products />}/>
    <Route path='product/:id' element={<ProductDetails />}/>
    <Route path="*" element={<ErrorPage message={"Error 404 Page Not Found"}/>}/>
  </Route>
))

function App() {

  const client =  new ApolloClient({
    cache: new InMemoryCache(),
    uri: import.meta.env.VITE_GRAPHQL_URI
  })
  
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </ApolloProvider>
  )
}

export default App
