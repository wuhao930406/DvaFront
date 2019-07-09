import {
  getall, getadv, getaboutus, getservice, getenv,
  getdevlop, getachieve

} from "../services/example";
import { routerRedux } from 'dva/router'

export default {
  namespace: 'example',

  state: {
    getall: [],
    getadv: [],
    getaboutus: {},
    getservice: [],
    getenv: [],
    getdevlop: [],
    getachieve: [""]
  },

  effects: {
    * getdevlop({ payload }, { call, put }) {
      let res = yield call(getdevlop, payload)
      yield put({
        type: 'updateState',
        payload: { getdevlop: res.data ? res.data : [] }
      })
      return res.next
    },
    * getachieve({ payload }, { call, put }) {
      let res = yield call(getachieve, payload)
      yield put({
        type: 'updateState',
        payload: { getachieve: res.data ? res.data : [] }
      })
      return res.next
    },
    * getenv({ payload }, { call, put }) {
      let res = yield call(getenv, payload)
      yield put({
        type: 'updateState',
        payload: { getenv: res.data ? res.data : [] }
      })
      return res.next
    },
    * getservice({ payload }, { call, put }) {
      let res = yield call(getservice, payload)
      yield put({
        type: 'updateState',
        payload: { getservice: res.data ? res.data : [] }
      })
      return res.next
    },

    * getall({ payload }, { call, put }) {
      let res = yield call(getall, payload)
      yield put({
        type: 'updateState',
        payload: { getall: res.data ? res.data : [] }
      })
      return res.next
    },
    * getaboutus({ payload }, { call, put }) {
      let res = yield call(getaboutus, payload)
      yield put({
        type: 'updateState',
        payload: { getaboutus: res.data ? res.data : [] }
      })
      return res.next
    },

    * getadv({ payload }, { call, put }) {
      let res = yield call(getadv, payload)
      yield put({
        type: 'updateState',
        payload: { getadv: res.data ? res.data : [] }
      })
      return res.next
    },

    * redirect({ payload }, { put }) {
      yield put(routerRedux.push(payload.url, payload.params));
      return true
    },


  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};
