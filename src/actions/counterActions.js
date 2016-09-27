import dispatcher from '../dispatcher' ;
let timer;
export function changeCount() {
    dispatcher.dispatch({
        type: 'COUNT',
        
    })
} 
export function startTimer() {
    if (timer===undefined){
        timer=setInterval(changeCount,120)
    }
    setTimeout(function () {
        clearInterval(timer)
    }, 3120);
}