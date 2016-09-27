var React = require('react');
let arr=[1,2,3,4]
class Team extends React.Component {
    render() {      
        return(
                <div id="team">
                    <div id="meet-our-team">
                        <h1> Meet our team </h1>
                        <hr className="hr1"/>
                        <hr className="hr2"/>
                     <div id="cont-fluid" className="container-fluid">
                        <div className="row">                                                    
                            {arr.map((item,index)=>{
                                return (
                                    <div key={index} id="team-cell1" className="col-xs-12 col-sm-6 col-md-3"> 

                                    <div className="team-img"> 
                                        <img src="src/images/team1.jpg" />
                                        <div className="circle"> 
                                            <i className="fa fa-plus fa-2x"></i> 
                                        </div> 
                                    </div>
                        <div className="team-profession">
                               <p className="team-p1"> John Doe</p>
                               <p className="team-p2">Web-designer</p>
                        </div>
                        <div className="networks">
                            <div className="network1">
                            <img className="network-img" src="src/images/social-hover-icon1.png"/> </div>
                            <div className="network2"><img className="network-img" src="src/images/social-hover-icon2.png"/></div>
                            <div className="network3"><img className="network-img" src="src/images/social-hover-icon3.png"/></div>
                            <div className="network4"><img className="network-img" src="src/images/social-hover-icon4.png"/></div>
                        </div>
                        </div>)
                            })}

                        </div>
                    </div>
            </div>
 </div>
            )
    }
}
module.exports = Team;