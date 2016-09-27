import dispatcher from '../dispatcher'; 

// создать элемент 
export function createItem(item) {
    dispatcher.dispatch({
        type: 'CREATE_ITEM', 
        item
        })
}

// удалить элемент
export function removeItem(title) {
    dispatcher.dispatch({
        type: 'REMOVE_ITEM', 
        title
        })
        } 