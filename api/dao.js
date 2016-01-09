import { fetchData } from '../utils/ajax'

var dao = {
    hotData: function (query) {
        return fetchData('/agent/sun/hotList', query);
    }
}

export default dao
