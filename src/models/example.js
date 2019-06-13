import { getall } from "../services/example";
import { routerRedux } from 'dva/router'

export default {
  namespace: 'example',

  state: {
    getall:""
  },

  effects: {
    * getall({ payload }, { call, put }) {  
      let res = yield call(getall, payload)
      yield put({
        type: 'updateState',
        payload: { getall:res.data?res.data:null }
      })
      return res.next
    },
    * redirect ({ payload }, { put }) {
      yield put(routerRedux.push(payload.url,payload.params));
      return true
    },

  },

  reducers: {
    updateState (state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
