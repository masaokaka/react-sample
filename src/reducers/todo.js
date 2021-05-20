import { FETCHDATA, INPUTDATA, ADDTOTODOLIST,DONETODO,DELETETODO } from "../actions";

//一番最初にreducerが呼ばれたときはundefinedが入っているので、以下の変数を初期値として入れておいてやる必要がある。
//2回目からはすでにstateに値が入っているのでそのstateが適応される。
const initialState = {
    todos: [],
    value: ''
}

export default(state = initialState, action) => {
    switch (action.type) {
        case FETCHDATA:
            return {
            todos: action.todos,
            value: "",
            };
        case INPUTDATA:
            return {
            todos: state.todos,
            value: action.input,
            };
        case ADDTOTODOLIST:
            let data = {
            value: "",
            todos: [
                ...state.todos,
                { id: state.todos.length, value: state.value, flg: false },
            ],
            };
            localStorage.setItem('data',JSON.stringify(data.todos))
        return data;
        case DONETODO:
            let index1 = action.index;
            let array1 = [...state.todos];
            array1[index1].flg = !array1[index1].flg;
            let data1 = {
                value: state.value,
                todos: [...array1],
            }
        localStorage.setItem('data',JSON.stringify(data1.todos))    
        return data1
        case DELETETODO:
            let index2 = action.index;
            let array2 = [...state.todos];
            array2.splice(index2, 1);
            let data2 = {
                value: state.value,
                todos: [...array2],
            }
            localStorage.setItem('data',JSON.stringify(data2.todos))    
            return data2
      default:
            return state;
    }
}