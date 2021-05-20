import { INPUTDATA, ADDTOTODOLIST,DONETODO,DELETETODO } from "../actions";

//一番最初にreducerが呼ばれたときはundefinedが入っているので、以下の変数を初期値として入れておいてやる必要がある。
//2回目からはすでにstateに値が入っているのでそのstateが適応される。
const initialState = {
    todos: [],
    value: ''
}

export default(state = initialState, action) => {
    switch (action.type) {
        case INPUTDATA:
            return {
                todos:state.todos,
                value:action.input
            }
        case ADDTOTODOLIST:
            return {
                value:'',
                todos: [...state.todos, { id: state.todos.length, value: state.value, flg:false }]
            }
        case DONETODO:
            let index1 = action.index;
            let array1 = [...state.todos]
            array1[index1].flg = !array1[index1].flg;
            return {
                value: state.value,
                todos:[...array1]
            }
        case DELETETODO:
            let index2 = action.index;
            let array2 = [...state.todos]
            array2.splice(index2,1)
            return {
                value: state.value,
                todos:[...array2]
            }
        default:
            return state
    }
}