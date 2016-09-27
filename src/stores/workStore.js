import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'
//let album=[
//        {src:"src/images/1.jpg", category:"Graphic Design" },
//        {src:"src/images/1.jpg", category:"Graphic Design" },
//        {src:"src/images/1.jpg", category:"Graphic Design" },
//        {src:"src/images/2.jpg", category:"Web Design" },
//        {src:"src/images/2.jpg", category:"Web Design" },
//        {src:"src/images/2.jpg", category:"Web Design" },
//        {src:"src/images/3.jpg", category:"Landing Pages" },
//        {src:"src/images/3.jpg", category:"Landing Pages" },
//        {src:"src/images/3.jpg", category:"Landing Pages" },
//        {src:"src/images/4.jpg", category:"Wordpress" },
//        {src:"src/images/4.jpg", category:"Wordpress" },
//        {src:"src/images/4.jpg", category:"Wordpress" }
//]

class WorkStore extends EventEmitter {
    constructor() {
        super() 
        this.albumPhotos = [{src:"src/images/1.jpg", categ:"Graphic Design" },
        {src:"src/images/1.jpg", categ:"Graphic Design" },
        {src:"src/images/1.jpg", categ:"Graphic Design" },
        {src:"src/images/2.jpg", categ:"Web Design" },
        {src:"src/images/2.jpg", categ:"Web Design" },
        {src:"src/images/2.jpg", categ:"Web Design" },
        {src:"src/images/3.jpg", categ:"Landing Pages" },
        {src:"src/images/3.jpg", categ:"Landing Pages" },
        {src:"src/images/3.jpg", categ:"Landing Pages" },
        {src:"src/images/4.jpg", categ:"Wordpress" },
        {src:"src/images/4.jpg", categ:"Wordpress" },
        {src:"src/images/4.jpg", categ:"Wordpress" }];

        this.album=[{src:"src/images/1.jpg", categ:"Graphic Design" },
        {src:"src/images/1.jpg", categ:"Graphic Design" },
        {src:"src/images/1.jpg", categ:"Graphic Design" },
        {src:"src/images/2.jpg", categ:"Web Design" },
        {src:"src/images/2.jpg", categ:"Web Design" },
        {src:"src/images/2.jpg", categ:"Web Design" },
        {src:"src/images/3.jpg", categ:"Landing Pages" },
        {src:"src/images/3.jpg", categ:"Landing Pages" },
        {src:"src/images/3.jpg", categ:"Landing Pages" },
        {src:"src/images/4.jpg", categ:"Wordpress" },
        {src:"src/images/4.jpg", categ:"Wordpress" },
        {src:"src/images/4.jpg", categ:"Wordpress" }];
    } 

    filterImages(cat) {
        let filteredItems=[];       
            this.album.map((item,index)=>{
                if (cat==item.categ||cat=="All") filteredItems.push(item);
            })
            this.albumPhotos=filteredItems;
        
        
    } 
    getAlbum(){
        return this.albumPhotos;
    }
    //обработчик actions
    handleActions(action) {
        switch (action.type) {
            case "FILTER": { 
                this.filterImages(action.category);
                this.emit('albumChange')
                console.log(`Filtered:${action.category}`); 
				break; 
            }
        }
    } 
} 

const workStore = new WorkStore; 
// регистрация обработчика actions 
dispatcher.register(workStore.handleActions.bind(workStore)); 

module.exports = workStore; 