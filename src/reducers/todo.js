import { INPUTDATA, ADDTOTODOLIST } from "../actions";

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
                value:state.value,
                todos: [...state.todos, { id: state.todos.length, value: state.value }]
            }
        default:
            return state
    }
}