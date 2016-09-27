import { EventEmitter } from 'events'; 
import dispatcher from '../dispatcher';
import cookie from 'react-cookie';

class FeedbackStore extends EventEmitter {
    constructor() {
        super()     
        this.comments = (cookie.load('comments')||[
                {
                    
                    title: 'Title1', 
                    msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    
                }, 
                {
                    
                    title: 'Title2', 
                    msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    
                }
        ])
    } 



    createItem(item) {
        this.comments.push({            
            title: item.title, 
            msg: item.msg
        })
        cookie.save('comments', this.comments, {path: '/'});
    } 

    // удалить элемент
    removeItem(title) {
        
        var newComments = [];
        for ( var i = 0; i < this.comments.length; i++ ) {
          
            if ( this.comments[i].title === title ) {
                console.log('deleted item title' + this.comments[i].title)
                continue;
            } 
            newComments.push(this.comments[i])
        } 
        this.comments = newComments; 
        cookie.save('comments', this.comments, {path: '/'});
    }

    // получить все элементы 
    getComments() {  
     
        return this.comments  } 

     



    // обработка actions
    handleActions(action) {
        switch(action.type) {
            case "CREATE_ITEM": {
                console.log('Item created'); 
                this.createItem(action.item);
                this.emit('changeComments')
                break;
            }
          
            case "REMOVE_ITEM": {
                console.log('Item removed') ;                
                this.removeItem(action.title);
                this.emit('changeComments');
                break;          
            } 
           
        }

    }
} 

const feedbackStore = new FeedbackStore; 
dispatcher.register(feedbackStore.handleActions.bind(feedbackStore)); 

module.exports = feedbackStore; 