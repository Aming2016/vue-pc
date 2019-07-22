import {axios,api} from "../../common/js/http";
import Cookies from "js-cookie";
import * as types from "../mutation-types";

// state永久存储的个人数据
export const state = {
  user: '',
  token: "312313"
};

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token
};

// mutations
export const mutations = {
  //存储token
  [types.SAVE_TOKEN](state, { token, remember }) {
    state.token = token;
  },
  //存储个人信息
  [types.FETCH_USER_SUCCESS](state, { user }) {
    state.user = user;
  },
  //移除token
  [types.FETCH_USER_FAILURE](state) {
    state.token = null;
    Cookies.remove("token");
  },
  //退出删除个人信息和token
  [types.LOGOUT](state) {
    state.user = null;
    state.token = null;
    console.log("删除信息")
    Cookies.remove("token");
  }
};

// actions
export const actions = {
  saveToken({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload);
  },
  // 获取登入用户信息
  async fetchUser({ commit }) {
    const { token } = state;
    if (token) {
      try {
        const { data } = await axios.get(api.user);
        commit(types.FETCH_USER_SUCCESS, { user: data.data });
      } catch (e) {
        commit(types.LOGOUT);
      }
    }
  },
  // 退出删除个人信息  user  token
  async logout({ commit }) {
    commit(types.LOGOUT);
  }
};
