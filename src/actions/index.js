export const FETCHDATA = 'fetchData'
export const ADDTOTODOLIST = 'addToTodoList'
export const DONETODO = 'doneTodo'
export const DELETETODO = 'deleteTodo'

export const addToTodoList = (value) => ({
        type: ADDTOTODOLIST,
        text:value
})
export const doneTodo = (index) => ({
        type: DONETODO,
        index:index
})
export const deleteTodo = (index) => ({
        type: DELETETODO,
        index:index
})
export const fetchData = (todos) => ({
        type: FETCHDATA,
        todos:todos
})