import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Products from './Pages/Products'
import Layout from './components/Layout'
import ProductDetails from './Pages/ProductDetails'
import { CartProvider } from './context/CartContext'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Products categoryName="all" />} />
    <Route path='all' element={<Products categoryName="all"/>}/>
    <Route path='tech' element={<Products categoryName="tech"/>}/>
    <Route path='clothes' element={<Products categoryName="clothes"/>}/>
    <Route path='/:id' element={<ProductDetails />}/>
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
