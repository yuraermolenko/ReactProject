var React = require('react'); 
var router = require('react-router');
var Link = router.Link;
var Work = require('../components/work.jsx');
var Counters = require('../components/counters.jsx');
var Feedback = require('../components/feedback.jsx');
var Contact = require('../components/contact.jsx');
var Options = require('../components/options.jsx');
var News = require('../components/news.jsx');
var Team = require('../components/team.jsx');



class Home extends React.Component {
    render() {
        return (
           <div>
               <Options></Options>
            <div id="service">
                <div className="serviceContainer">
                    <div className="serviceHeader">
                        <h1>Our Services</h1>
                        <hr className="hr1" />
                        <hr className="hr2" />
                    </div>
                        <div>
                            <ul className="serviceButtons">
                                <li className="serviceButtonsActive"><Link to="/service/Web" > Web Design</Link></li>
						        <li><Link to="/service/Graph">Graphic Design</Link></li>
						        <li><Link to="/service/Support">Online Support</Link></li>
						        <li><Link to="/service/AppDesign">App Design</Link></li>
						        <li><Link to="/service/Marketing">Online Marketing</Link></li>
						        <li><Link to="/service/Seo">Seo Service</Link></li>
                        </ul>
                        </div>
                    

                </div>
            </div>
                <div className="container-fluid">{this.props.children}</div>
               <Work></Work>
               <Team></Team>
               <Counters></Counters>
               <News></News>
               <Feedback></Feedback>
               <Contact></Contact>
                </div>
               
      )}
}

module.exports = Home; 