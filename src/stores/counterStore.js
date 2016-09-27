import { EventEmitter } from 'events' 
import dispatcher from '../dispatcher'

class CounterStore extends EventEmitter {
    constructor() {
        super() 
        this.worksResult=4609;
        this.customersResult=3470;
        this.purchaseResult=2908;
        this.officeResult=1908;
        this.works=9;
        this.customers=70;
        this.purchase=8;
        this.office=8;
    }
    incCounts(){
        this.works=this.works+184;
        this.customers=this.customers+136;
        this.purchase=this.purchase+116;
        this.office=this.office+76;
    }
    getWorks(){
        return this.works;
    }
    getCustomers(){
        return this.customers;
    }
    getPurchase(){
        return this.purchase;
    }
    getOffice(){
        return this.office;
    }
handleActions(action) {
    switch (action.type) {
        case "COUNT": { 
            this.incCounts();
            this.emit('countChange');
            break; 
        }
    }
} 
} 

const counterStore = new CounterStore; 
// регистрация обработчика actions 
dispatcher.register(counterStore.handleActions.bind(counterStore)); 

module.exports = counterStore; 