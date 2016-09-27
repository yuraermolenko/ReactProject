import { EventEmitter } from 'events'; 
import dispatcher from '../dispatcher';



class NewsStore extends EventEmitter {
    constructor() {
        super() 
        this.news = []; 
        this.dataStore=[];
    } 
    setNews(news) {
        this.dataStore=news;
        this.news = news.slice(0,8);
    } 
    loadMore(){
        this.news=this.dataStore.slice(0,16);
    }
    getNews() {
        console.log(this.news)
        return this.news
         console.log(this.news)
    }

    // обработчик actions
    handleActions(action) {
        switch (action.type) {
            case "LOAD_START": {
                console.log('load start'); 
                this.emit('loadStart'); 
                break; 
            } 
            case "LOAD_END": {
                this.setNews(action.data); 
                console.log('load end'); 
                this.emit('loadEnd'); 
                break; 
            }
            case "LOAD_MORE": {
                this.loadMore();
                console.log('loaded more'); 
                this.emit('loadMore'); 
                break; 
            } 
        }
    }    
} 

const newsStore = new NewsStore; 
// зарегистрировать обработчик actions в диспетчере 
dispatcher.register(newsStore.handleActions.bind(newsStore)); 

module.exports = newsStore; 