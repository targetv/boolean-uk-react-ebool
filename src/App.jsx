import Header from "./components/Header";
import { Route, Switch, Redirect } from 'react-router-dom'
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from './pages/CategoriesPage'
import BasketPage from "./pages/BasketPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoriesResultsPage from './pages/CategoriesResultsPage'
import { useState } from "react";

function App() {

  const [basket, setBasket]= useState([])

  return (
    <>
      <Header />
      <main>
        {
         <Switch>
           <Route path="/" exact  >
             <Redirect to="/products"></Redirect>
             </Route>
             <Route path="/products" exact> <ProductsPage/></Route>
             <Route path="/products/:id" exact><ProductDetailPage setBasket={setBasket} basket={basket}/></Route> 
           <Route path="/categories" exact>
            <CategoriesPage />
          </Route>
          <Route path="/categories/:id" exact>
            <CategoriesResultsPage />
          </Route>
           <Route path="/basket" exact><BasketPage BasketItems={basket}/></Route> 
          <Route><main><h1>Page not found</h1></main></Route>
         </Switch>
        }
      </main>
    </>
  );
}

export default App;
