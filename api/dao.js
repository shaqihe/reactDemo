import { fetch } from '../utils/fetch'

var dao = {
    hotData: (query)=>{
        return fetch('/agent/sun/hotList', query);
    }
}

export default dao
