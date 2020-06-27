import {createStore,combineReducers} from "redux"
function text(state=["hahahah"],action){
    switch(action.type){
        case  "sendMsg":return [...state,action.list]
        default:return state
    }
}
// 添加足迹
function historypush(state=[],action){
    switch(action.type){
        case  "puthistory":{
            // 去重复
              //如果老数组中有id相同的数据,那我们就移除
            //   console.log(action.list.id)
            for(let i=0;i<state.length;i++){
                if(state[i].id===action.list.id){
                    // console.log(action.list.id)
                    state.splice(i, 1)
                    break
                }
            }
                  //2. 把新数据放到数组的最前列
         return [action.list,...state];
        }
        
       
        default:return state
    }
}
export default createStore(combineReducers({
    text,historypush
}))
