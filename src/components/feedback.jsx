var React = require('react');
var feedbackActions = require('../actions/feedbackActions.js');
var feedbackStore = require('../stores/feedbackStore.js');
class Feedback extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:feedbackStore.getComments()
        }
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }
    addComment() {
        let title = document.getElementsByName('title')[0].value;
        let msg = document.getElementsByName('message')[0].value;
        if (title.length == 0 || msg.length == 0) {
            alert('Поля Title и Message должны быть заполнены!')
        }
        else {
            let comment = {};
            comment.title = title;
            comment.msg = msg;
            feedbackActions.createItem(comment);
        }
    }
    removeComment(e) {       
        feedbackActions.removeItem(e.target.dataset.title);
    }
    componentWillMount() {
        feedbackStore.on('changeComments', () => {
            this.setState({data:feedbackStore.getComments()})
        })
    }
    render() {
        return(
            <div id="feedback">
                <div className="feedbackHeader">
                    <h1>Feedback</h1>
                    <hr className="hr1" />
                    <hr className="hr2" />
                </div>                
                 <div className="feedbackInner">
                     {this.state.data.map((item, index) =>{
                     return (
                    <div key={index} className="feedbackMessage">
                        <h3>{item.title}</h3>
                        <p>{item.msg}</p>
                        <span>
                            <i data-title={item.title} className="fa fa-remove fa-1x" onClick={(e) => { this.removeComment(e) }}></i>
                        </span>
                    </div>
                     )
                     })}
                 </div>
                <form className="feedbackForm">
                     <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                        <input type="text" placeholder="Title" name="title" />
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>
                      <div className="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
                          <h1>Leave us a message</h1>
                          <span className="feedbackAddBtn" onClick={()=>{this.addComment()}}>
                              <i className="fa fa-plus fa-1x"></i>
                              Add comment
                          </span>
                      </div>
                     </div>
                </form>
               

            </div>
            )
    }
}
module.exports = Feedback;