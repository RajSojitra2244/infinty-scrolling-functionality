


const redux =require('redux')
const createStore =redux.createStore
 const Buy_Cake = ()=>{
    return{
    type:'Buy_Cake',
    info:'Firt redux action'
    }
}
const initialstate ={
    numeberOfCake : 10
}

const reducer = (state = initialstate,action)=>{

    switch(action.type){

        case Buy_Cake: return{
            ...state,
            numeberOfCake : state.numeberOfCake -1
        }
        default: return state
    }
}
const store =createStore(reducer)
console.log('Initial State',store.getState);
const unsubscribe = store.subscribe(()=> console.log('update state',store.getState()))
store.dispatch(Buy_Cake)
store.dispatch(Buy_Cake)
store.dispatch(Buy_Cake)
unsubscribe()
