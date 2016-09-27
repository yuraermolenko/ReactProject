var React = require('react'); 
var ReactDOM = require('react-dom');

// импорт необходимых для настройки маршрутизации объектов из модуля react-router
var router = require('react-router'); 

var Router = router.Router; 
var Route = router.Route; 
var Link = router.Link; 
var IndexRoute = router.IndexRoute; 
var hashHistory = router.hashHistory;


var Scroll = require('react-scroll');

var ScrollLink = Scroll.Link;
var ScrollElement = Scroll.Element;
var ScrollEvents = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

var Home = require('./components/Home.jsx');
var Web = require('./components/serviceBlocks/Web.jsx');
var Graph = require('./components/serviceBlocks/Graph.jsx');
var AppDesign = require('./components/serviceBlocks/AppDesign.jsx');
var Marketing = require('./components/serviceBlocks/Marketing.jsx');
var Support = require('./components/serviceBlocks/Support.jsx');
var Seo = require('./components/serviceBlocks/Seo.jsx');

class NewId extends React.Component { 
    constructor(props) {
        super(props)
        console.log(this.props); 
    }
    render() { 
        // доступ к query параметрам 	
        let location = this.props.location
        let date = location.query.date;
        let text = location.query.text;
        return (
          <div className="container newIdContainer">
            <h3>New id: {this.props.params.newID}</h3>
            <p>{text}</p>
              <h4>{date}</h4>
              <Link to="/">Back</Link>
        </div>
  )}
}


class App extends React.Component {
    componentDidMount() {
        scrollSpy.update();
    }
    render() {

        let options = {
            duration: 500,
            smooth: true,
            offset:-50,
            spy: true,
            activeClass: 'btnActive'
        };
        return (
               <div id="main">
                <header id="header">
		<div className="container-fluid">
                <div className="logo">
              <img src="src/images/logo.jpg" />
                </div>
			<nav className="menu">
				<ul>
					<li><ScrollLink to="options"  {...options}>Home</ScrollLink></li>
					<li><ScrollLink to="service"  {...options}>Service</ScrollLink></li>
					<li><ScrollLink to="about"  {...options}>About</ScrollLink></li>
					<li><ScrollLink to="work"  {...options}>Work</ScrollLink></li>
					<li><ScrollLink to="team"  {...options}>Team</ScrollLink></li>
					<li><ScrollLink to="news"  {...options}>News</ScrollLink></li>
					<li><ScrollLink to="contact"  {...options}>Contact</ScrollLink></li>
				</ul>
			</nav>
		</div>
                </header>
                   <div className="homeContainer">{this.props.children}</div>

                   <footer>
		
			<div className="container footer-container">
				<p className="footer-text">Copyright 2016 <a  href="javascript:void(0)">theHam</a> | All Rights Reserved</p>
				<ScrollLink className="footer-btn" to="options" spy={true} smooth={true} offset={-50} duration={500}><i className="fa fa-angle-up"></i></ScrollLink>
			</div>
		
                   </footer>
                </div>
   )}
}




ReactDOM.render(<Router history={hashHistory}>
    <Route component={App}>
        <Route key={0} path ="/" component={Home}>
            <IndexRoute component={Web}></IndexRoute>
            <Route key={1} path="/service/Web" component={Web}/>
            <Route key={2} path="/service/Graph" component={Graph} />
            <Route key={3} path="/service/Support" component={Support} />
            <Route key={4} path="/service/AppDesign" component={AppDesign} />
            <Route key={5} path="/service/Marketing" component={Marketing} />
            <Route key={6} path="/service/Seo" component={Seo} />
        </Route>
        <Route key={7} path="new/:newID" component={NewId} />
    </Route>

</Router>, document.getElementById('app'));

