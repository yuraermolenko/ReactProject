import dispatcher from '../dispatcher' ;
export function filterPhotos(category) {
    dispatcher.dispatch({
        type: 'FILTER',
        category
    })
} 