export const FETCHDATA = 'fetchData'
export const ADDTOTODOLIST = 'addToTodoList'
export const DONETODO = 'doneTodo'
export const DELETETODO = 'deleteTodo'

export const addToTodoList = (todo) => ({
        type: ADDTOTODOLIST,
        //オブジェクトわたしてる
        todo:todo
})
export const doneTodo = (index) => ({
        type: DONETODO,
        index:index
})
export const deleteTodo = (index) => ({
        type: DELETETODO,
        index:index
})
export const fetchData = (data) => ({
        type: FETCHDATA,
        todos:data
})