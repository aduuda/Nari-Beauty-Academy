import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
import './Assets/css/Site.min.css';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import HomePage from './Components/Pages/HomePage';
import IntroducePage from './Components/Pages/IntroducePage';
import ServicesPage from './Components/Pages/ServicesPage';
import DiscountPage from './Components/Pages/DiscountPage';
import LibraryPage from './Components/Pages/LibraryPage';
import QuestionAnswerPage from './Components/Pages/QuestionAnswerPage';
import CustomerPage from './Components/Pages/CustomerPage';
import EmployPage from './Components/Pages/EmployPage';
import TrainningPage from './Components/Pages/TrainningPage';
import ContactPage from './Components/Pages/ContactPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/gioi-thieu" component={IntroducePage} />
            <Route path="/dich-vu" component={ServicesPage} />
            <Route path="/khuyen-mai" component={DiscountPage} />
            <Route path="/thu-vien" component={LibraryPage} />
            <Route path="/hoi-dap" component={QuestionAnswerPage} />
            <Route path="/khach-hang" component={CustomerPage} />
            <Route path="/tuyen-dung" component={EmployPage} />
            <Route path="/dao-tao" component={TrainningPage} />
            <Route path="/lien-he" component={ContactPage} />
          </Switch>
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
