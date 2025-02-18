import { lazy, Suspense } from "react"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import NewRecipe from "./components/NewRecipe";

const Favourite = lazy(() => delayForDemo(import('./components/Favourites')));
const Recipe = lazy(() => delayForDemo(import('./components/Recipe')));

export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favourite"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Favourite />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Recipe />
                </Suspense>
              </ErrorBoundary>
            } />

          <Route
            path="/recipes"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <NewRecipe />
                </Suspense>
              </ErrorBoundary>
            } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
