import { lazy, Suspense } from 'react';
/// Components
import Index from './jsx/index';

import { connect, useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// action
// import { checkAutoLogin } from './services/AuthService';
// import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import { useState } from 'react';

const SignUp = lazy(() => import('./jsx/pages/Registration'));
const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));
const Login = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
  });
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function App(props) {
  let routes = (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='' element={<Login />} />
      <Route path='/page-register' element={<SignUp />} />
      <Route path='/page-forgot-password' element={<ForgotPassword />} />
    </Routes>
  );

  return (
    <>
      <BrowserRouter basename='/admin'><Suspense fallback={
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
      }
      >
        {routes}
         <Index />
      </Suspense></BrowserRouter >
    </>
  );

};

export default App;