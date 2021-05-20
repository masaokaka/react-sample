export const INPUTDATA = 'inputData'
export const ADDTOTODOLIST = 'addToTodoList'

export const inputData = (e) => ({
        type: INPUTDATA,
        input:e.target.value
})
export const addToTodoList = () => ({
        type:ADDTOTODOLIST
})