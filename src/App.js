import { Fragment, Suspense, lazy } from "react";
import Header from './components/Header';
import Loader from "./components/Loader";

const LazyBody = lazy(() => import('./components/Body'));

function App() {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loader />}>
        <LazyBody />
      </Suspense>
    </Fragment>
  );
}

export default App;
