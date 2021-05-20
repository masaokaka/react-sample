//全てのreducerメソッドが描かれたjsファイルを統合するための場所です。
//統合するためのcombineReducersを呼び出し。(yarnでインストールしていることが前提)
import { combineReducers } from 'redux'
//結合するjsファイルをインポート
import todo from './todo'

export default combineReducers({todo})//複数あれば[,]でくぎる