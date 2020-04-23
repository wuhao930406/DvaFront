import {
  getall, getadv, getaboutus, getservice, getenv,
  getdevlop, getachieve, getcourse, getschool, getedu, getcooperate, getcontact, getpublic

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
    getachieve: [],
    getcourse: [],
    getschool: [],
    getedu: [],
    getcooperate: [],
    getcontact: [],
    getpublic: [],
  },
  subscriptions: {
    setup(vlaue) {
      console.log(vlaue)
    }
  },
  effects: {
    * getpublic({ payload }, { call, put }) {
      let res = yield call(getpublic, payload)
      yield put({
        type: 'updateState',
        payload: { getpublic: res.data ? res.data : [] }
      })
      return res.next
    },
    * getcontact({ payload }, { call, put }) {
      let res = yield call(getcontact, payload)
      yield put({
        type: 'updateState',
        payload: { getcontact: res.data ? res.data : [] }
      })
      return res.next
    },
    * getcooperate({ payload }, { call, put }) {
      let res = yield call(getcooperate, payload)
      yield put({
        type: 'updateState',
        payload: { getcooperate: res.data ? res.data : [] }
      })
      return res.next
    },
    * getedu({ payload }, { call, put }) {
      let res = yield call(getedu, payload)
      yield put({
        type: 'updateState',
        payload: { getedu: res.data ? res.data : [] }
      })
      return res.next
    },
    * getschool({ payload }, { call, put }) {
      let res = yield call(getschool, payload)
      yield put({
        type: 'updateState',
        payload: { getschool: res.data ? res.data : [] }
      })
      return res.next
    },
    * getcourse({ payload }, { call, put }) {
      let res = yield call(getcourse, payload)
      yield put({
        type: 'updateState',
        payload: { getcourse: res.data ? res.data : [] }
      })
      return res.next
    },

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
