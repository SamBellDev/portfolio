import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import HomePage from "../Homepage/Homepage";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";

const MyRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default MyRouter