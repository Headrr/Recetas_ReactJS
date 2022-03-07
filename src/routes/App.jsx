import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/css/styles.css";
import ErrorBoundary from "./../components/ErrorBoundary/ErrorBoundary";
import Loader from "./../components/Loader/Loader";

const Header = lazy(() => import("../components/header/header.components"));
const Footer = lazy(() => import("../components/footer/footer.components"));
const RecipesContextProvider = lazy(() => import("../contexts/RecetasContext"));
const RecipeDetailsContextProvider = lazy(() =>
  import("../contexts/RecipeDetailsContext")
);
const SavesContextProvider = lazy(() => import("../contexts/Saves"));
const RecipeDetails = lazy(() => import("../components/RecipeDetails"));
const Favoritos = lazy(() => import("../components/Favoritos/index"));
const Recipes = lazy(() => import("../components/Recipes"));
const NotFound = lazy(() => import("../components/NotFound/NotFound"));

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ErrorBoundary>
            <Suspense
              fallback={
                <div>
                  <Loader />
                  {/* ...loading */}
                </div>
              }
            >
              <Header />
              {/* HOC en SavesContextProvider para Englobar las definiciones y pasarle los valores para el manejo de las recetas en mis me gusta, y el localstorage*/}
              <SavesContextProvider>
                <Switch>
                  <Route exact path="/">
                    {/* HOC en RecipesContextProvider para Englobar la definición de Recipes y pasarle otras características, en este caso el context de Recipes que recibe la API */}
                    <RecipesContextProvider>
                      <Recipes />
                    </RecipesContextProvider>
                  </Route>
                  <Route path="/recetas/id/:id">
                    {/* HOC en RecipeDetailsContextProvider para Englobar la definición de RecipeDetails y pasarle otras características, en este caso el context de RecipeDetails que recibe la data de la receta según el id */}
                    <RecipeDetailsContextProvider>
                      <RecipeDetails />
                    </RecipeDetailsContextProvider>
                  </Route>
                  <Route path="/favoritos">
                    {/* <SavesContextProvider> */}
                    <Favoritos />
                    {/* </SavesContextProvider> */}
                  </Route>

                  <Route component={NotFound}></Route>
                </Switch>
              </SavesContextProvider>
              <Footer></Footer>
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
