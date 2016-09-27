var React = require('react');
class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameErr: '',
            emailErr: '',
            messageErr:''
        }
        this.validateForm = this.validateForm.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
    }
    nameChange(e){
        let testVal = /^\w+$/;

        if (e.target.value.search(testVal) != -1) {
            this.setState({ nameErr: '' });
        }

    }
    emailChange(e){
        let test = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]$/;
     
        if (e.target.value.search(test) != -1) {
            this.setState({emailErr: ''}); 
        }

    } 
    messageChange(e){
        let test = /^.{20,}$/;
     
        if (e.target.value.search(test) != -1) {
            this.setState({messageErr: ''}); 
        }

    }
    validateForm(e) {
        var nameTest=/^\w+$/;
        var emailTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;
        var messageTest = /^.{20,}$/;
        if (document.getElementsByName('Name')[0].value.search(nameTest) == -1) {
            e.preventDefault();
            this.setState({ nameErr: 'only english characters allowed!' });
        };
        if (document.getElementsByName('E-mail')[0].value.search(emailTest) == -1) {
            e.preventDefault();
            this.setState({ emailErr: 'invalid email!' });
        };
        if (document.getElementsByName('Message')[0].value.search(messageTest) == -1) {
            e.preventDefault();
            this.setState({ messageErr: 'minimun 20 characters!' });
        };
        
    }
        render(){
            return(
                     <div id="contact">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-md-7">
    
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8359291561046!2d30.450614817669607!3d50.444156663504785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce87a0bfa6d3%3A0x19327c76da170b91!2sIgnite+Ukraine!5e0!3m2!1sru!2sua!4v1474789633419" height="450" frameBorder="0" allowFullScreen></iframe>
                                </div>
   
                                 <div className="col-xs-12 col-md-5">
                                    <h1> Keep in Touch </h1>
                                    <div id="div-hr">
                                         <hr className="hr1"/>
                                         <hr className="hr2"/>
                                    </div>
                                    <form className="contacts-form">
                                        <p>
                                            <input type="text" onInput={(e)=>{this.nameChange(e)}} name="Name" placeholder="Name" size="45"/>
                                        </p>
                                        <p className="error">{this.state.nameErr}</p>
                                        <p><input type="text" name="E-mail" onInput={(e)=>{this.emailChange(e)}} placeholder="E-mail" size="45"/></p>
                                        <p className="error">{this.state.emailErr}</p>
                                        <p><textarea name="Message" onInput={(e) => { this.messageChange(e)}} placeholder="Your message"></textarea></p>
                                        <p className="error">{this.state.messageErr}</p>
                                        <p> <input type="submit" onClick={(e)=>{this.validateForm(e)}} value="Send request"/></p>
                                    </form>
                                </div>

                            </div>
                        </div>
                       
                    </div>

                )
        }
};
module.exports=Contact;