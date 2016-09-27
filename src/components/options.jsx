var React = require('react');
class Options extends React.Component {

    render() {
        return (
            <div id="options">
            <div className="container-fluid">
            <div className="row">
                 <div id="option-item1" className="col-xs-12 col-sm-6 col-md-3"> 
                <div className="item-img">
                    <img src="src/images/options-icon1.png"/> <p> pesonalised options </p>
                </div>
                    </div>
                <div id="option-item2"  className="col-xs-12 col-sm-6 col-md-3">
 	                <div className="item-img">
                        <img src="src/images/options-icon2.png"/> <p> fully customizible </p>
                    </div>
                </div>
                <div id="option-item3" className="col-xs-12 col-sm-6 col-md-3">
	                <div className="item-img">
                        <img src="src/images/options-icon3.png"/> <p> unlimited support </p>
                    </div>
                </div>
                <div  id="option-item4" className="col-xs-12 col-sm-6 col-md-3">
	                <div className="item-img">
                        <img src="src/images/options-icon4.png"/> <p> responsive all device </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            )
    }
}
module.exports=Options;