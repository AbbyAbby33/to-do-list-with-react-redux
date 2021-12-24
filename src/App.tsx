import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { GoCalendar, GoListUnordered } from 'react-icons/go';

// 頁面
const CalendarStyle = lazy(() => import('./pages/CalendarStyle'));
const ListStyle = lazy(() => import('./pages/ListStyle'));

function App() {
  return (
    <div className="Tdl">
      <video autoPlay muted loop className="Tdl-video">
        <source src="to-do-list-with-react-redux/videos/sea-1.mp4" type="video/mp4" />
      </video>
      <div className="Tdl-content">
        {/* page */}
        <div className="Tdl-page">
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route path="/list-style" component={ListStyle} />              
              <Route path="/calendar-style" component={CalendarStyle} />
              <Redirect to="/list-style" />
            </Switch>
          </Suspense>
        </div>

        {/* menu + info */}
        <div className="Tdl-menu">
          <NavLink to="/list-style">
            <div className="Tdl-menu-button">
              <GoListUnordered />
            </div>
          </NavLink>
          <NavLink to="/calendar-style">
            <div className="Tdl-menu-button">
              <GoCalendar />
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default App;
