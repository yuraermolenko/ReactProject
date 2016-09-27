var React = require('react');
var counterActions = require('../actions/counterActions.js');
var counterStore = require('../stores/counterStore.js');
class Counters extends React.Component {
    constructor(){
        super()
        this.state={
            works: 0,
            customers: 70,
            purchase: 8,
            office: 8
        }
    }
  
    componentWillMount(){
        counterStore.on('countChange', () => {
            this.setState({
                works: counterStore.getWorks(),      
                customers: counterStore.getCustomers(),
                purchase: counterStore.getPurchase(),
                office: counterStore.getOffice()
            })
        })
    }
    componentDidMount() {
        function ifScroll() {
            var counters = document.getElementById("counters");
            var countersCoords = counters.getBoundingClientRect();
            var isVisibleTop = countersCoords.top > 0 && countersCoords.top < document.documentElement.clientHeight;
            var isVisibleBottom = countersCoords.bottom < document.documentElement.clientHeight && countersCoords.bottom > 0;
            if (isVisibleTop || isVisibleBottom) {
                counterActions.startTimer();
                document.removeEventListener('scroll', ifScroll, false);
            }
        }
        document.addEventListener("scroll", ifScroll, false);
    }
    render() {
        return (
                    <div id='counters'>
                        <div className='dark-light-counters'>
                            <div className='dark-light-counters-icon'>
                                <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                                <h3>{this.state.works}</h3>
                                <span>Works</span>
                            </div>
                        </div>
                        <div className='light-dark-counters'>
                            <div className='light-dark-counters-icon'>
                                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                                <h3>{this.state.customers}</h3>
                                <span>Customers</span>
                            </div>
                        </div>
                        <div className='dark-light-counters'>
                            <div className='dark-light-counters-icon'>
                               <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                                <h3>{this.state.purchase}</h3>
                                <span>Purchase</span>
                            </div>
                        </div>
                        <div className='light-dark-counters'>
                            <div className='light-dark-counters-icon'>
                                <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                                <h3>{this.state.office}</h3>
                                <span>Office</span>
                            </div>
                        </div>
                    </div>
            )
    }

}
module.exports = Counters;