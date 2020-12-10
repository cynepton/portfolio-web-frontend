import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {
    LandingPage
} from './pages';

export default function App() {
    return (
        <Router>
            <Route exact path={ROUTES.HOME}>
                <LandingPage />
            </Route>
        </Router>
    );
}
