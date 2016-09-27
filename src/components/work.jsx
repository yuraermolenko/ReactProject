var React = require('react');
var workActions = require('../actions/workActions.js');
var workStore = require('../stores/WorkStore.js');
class Work extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            album: workStore.getAlbum(),
           
        }
        this.filterPhotos = this.filterPhotos.bind(this);
    }
    filterPhotos(e) {
        let category = e.target.dataset.categ;
        //let ul = document.getElementsByClassName('workButtonsPanel')[0];
        //var liArr = ul.getElementsByTagName('li');
        //for (var i = 0; i <= liArr.length; i++) {
        //    if (liArr[i].className == "workButtonsActive workButtons col-xs-12 col-sm-4 col-md-2") {
        //        liArr[i].className = "workButtons col-xs-12 col-sm-4 col-md-2";
        //    }
        //}
        //e.target.className = "workButtonsActive workButtons col-xs-12 col-sm-4 col-md-2";
        workActions.filterPhotos(category);
    }
    componentWillMount() {
        // назначение обработчика события 
        workStore.on("albumChange", () => { this.setState({ album: workStore.getAlbum() }) })
       
    }
    
    render() {
        return (
           
            <div id="work">
                <div className="workContainer">
                    <div className="workHeader">
                        <h1>Our Amazing Work</h1>
                        <hr className="hr1" />
                        <hr className="hr2" />
                    </div>
                        <div className="container-fluid">
                            <ul className="workButtonsPanel row">
                                <li className="workButtons col-xs-12 col-sm-4 col-md-2" data-categ="All" onClick={(e) =>this.filterPhotos(e)}>All</li>
						        <li className="workButtons col-xs-12 col-sm-4 col-md-3" data-categ="Graphic Design" onClick={(e) =>this.filterPhotos(e)}>Graphic Design</li>
						        <li className="workButtons col-xs-12 col-sm-4 col-md-2" data-categ="Web Design" onClick={(e) =>this.filterPhotos(e)}>Web Design</li>
						        <li className="workButtons col-xs-12 col-sm-6 col-md-3" data-categ="Landing Pages" onClick={(e) =>this.filterPhotos(e)}>Landing Pages</li>
						        <li className="workButtons col-xs-12 col-sm-6 col-md-2" data-categ="Wordpress" onClick={(e) =>this.filterPhotos(e)}>Wordpress</li>						        
                        </ul>
                        </div> 
                            <ul className="photoContainer">
                                {this.state.album.map((item, index) => {
                        return (
                                <li key={index} className="photoItem">
                                    <img src={item.src} />
                                    <div className="hoverObj">
                                        <span className="hoverObjContent">
                                            <a href="javascript:void(0)"><i className="fa fa-link" aria-hidden="true"></i></a>
										    <a href="javascript:void(0)"><i className="fa fa-search" aria-hidden="true"></i></a>
                                        </span>
                                        <h1 className="hoverObjTitle">creative design</h1>
									    <p className="hoverObjCategory">{item.categ}</p>
                                    </div>
                                </li>
                            )
                    })}
                            </ul>
                                 
                </div>
            </div>
                
               
      )}
}

module.exports = Work; 