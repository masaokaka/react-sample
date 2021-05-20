export const INPUTDATA = 'inputData'
export const ADDTOTODOLIST = 'addToTodoList'
export const DONETODO = 'doneTodo'

export const inputData = (e) => ({
        type: INPUTDATA,
        input:e.target.value
})
export const addToTodoList = () => ({
        type:ADDTOTODOLIST
})
export const doneTodo = (index) => ({
        type: DONETODO,
        index:index
})