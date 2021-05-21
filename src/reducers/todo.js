import { FETCHDATA,ADDTOTODOLIST,DONETODO,DELETETODO } from "../actions";

//一番最初にreducerが呼ばれたときはundefinedが入っているので、以下の変数を初期値として入れておいてやる必要がある。
//2回目からはすでにstateに値が入っているのでそのstateが適応される。
const initialState = {
    todos: [],
}

export default(state = initialState, action) => {
    switch (action.type) {
        case FETCHDATA:
            return {
            todos: action.todos,
            };
        case ADDTOTODOLIST:
            action.todo.id = state.todos.length+1
            let data = {
            todos: [
                ...state.todos,
                action.todo,
            ],
            };
            localStorage.setItem('data',JSON.stringify(data.todos))
        return data;
        case DONETODO:
            let index1 = action.index;
            let array1 = [...state.todos];
            array1[index1].flg = !array1[index1].flg;
            let data1 = {
                todos: [...array1],
            }
        localStorage.setItem('data',JSON.stringify(data1.todos))    
        return data1
        case DELETETODO:
            let index2 = action.index;
            let array2 = [...state.todos];
            array2.splice(index2, 1);
            let data2 = {
                todos: [...array2],
            }
            localStorage.setItem('data',JSON.stringify(data2.todos))    
            return data2
      default:
            return state;
    }
}