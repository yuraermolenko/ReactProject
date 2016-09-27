import dispatcher from '../dispatcher'
export function loadMore(){
    dispatcher.dispatch({
        type: 'LOAD_MORE'
    }) 
}

export function loadNews() { 
    // событие начала загрузки
    dispatcher.dispatch({
        type: 'LOAD_START',
       
    }) 

    // асинхронная обработка события 
    let promise = fetch('data/data.json')
        .then(function(response) { 
            return response.json(); 
        }).then(function(json){
						
            let data = json
			
            //событие окончания загрузки
            dispatcher.dispatch({
                type: 'LOAD_END', 
                data

                })
                })
                }
