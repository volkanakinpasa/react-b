import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Loading from './Loading/Loading';

const AsyncHome = lazy(() => import('./Home/Home'));
const AsyncSub1 = lazy(() => import('./Sub1/Sub1'));

class App extends React.PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route exact path="/" component={AsyncHome} />
              <Route exact path="/sub1" component={AsyncSub1} />
            </Suspense>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
