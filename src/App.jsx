import React from 'react';
import { Router } from '@reach/router';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SongLeaderboard from './pages/SongLeaderboard';
import UserLeaderboard from './pages/UserLeaderboard';

const App = () => (
    <div>
        <Navigation />
        <Router>
            <Home path="/" />
            <Rooms path="/rooms" />
            <SongLeaderboard path="/leaderboard/songs" />
            <UserLeaderboard path="/leaderboard/users" />
        </Router>
        <Footer />
    </div>
);

export default App;
