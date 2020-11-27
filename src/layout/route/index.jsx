import React from 'react';

import SearchLayout from '../template/search-layout';
import HomePage from '../pages/home-page';
import SearchPage from '../pages/search-page';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainLayout from '../template/main-layout';
import MoviePage from '../pages/movie-page';
import FavoritesPage from '../pages/favorites-page';
import { ToastProvider } from 'react-toast-notifications'


const RouteLayout = (props) => {
    return <Router basename={process.env.PUBLIC_URL}>
        <ToastProvider placement="top-center">
            <Switch>
                <SearchLayout path={'/'} exact component={HomePage} />
                <MainLayout path={'/search'} component={SearchPage} />
                <MainLayout path={'/stared'} component={FavoritesPage} />
                <MainLayout path={'/:id'} component={MoviePage} />
            </Switch>
        </ToastProvider>
    </Router>;
};

export default RouteLayout;