import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Registry from '../../pages/Registry/Registry';
import Gallery from '../../pages/Gallery/Gallery';
import EventInfo from '../../pages/EventInfo/EventInfo';
import WeddingParty from '../../pages/WeddingParty/WeddingParty';
import OurStory from '../../pages/OurStory/OurStory';
import Couple from '../../pages/Couple/Couple';
import Home from '../../pages/Home/Home';
import Navigation from '../Navigation/Navigation';


export default function Application() {
    return (
        <Router>
            <div>
				<Navigation />
                <Switch>
					<Route path="/registry">
                        <Registry />
                    </Route>
					<Route path="/gallery">
                        <Gallery />
                    </Route>
					<Route path="/event-info">
                        <EventInfo />
                    </Route>
					<Route path="/wedding-party">
                        <WeddingParty />
                    </Route>
                    <Route path="/our-story">
                        <OurStory />
                    </Route>
                    <Route path="/couple">
                        <Couple />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
