import { COUNTPLUS, COUNTMINUS } from '../actions'

//一番最初にreducerが呼ばれたときはundefinedが入っているので、以下の変数を初期値として入れておいてやる必要がある。
//2回目からはすでにstateに値が入っているのでそのstateが適応される。
const initialState = { val: 0 }

export default(state = initialState, action) => {
    switch (action.type) {
        case COUNTPLUS:
            return { val: state.val + 1 }
        case COUNTMINUS:
            return { val: state.val - 1 }
        default:
            return state
    }
}