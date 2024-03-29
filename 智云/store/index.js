import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		token: 'asdasd',
        loginInfo: {
            account: '',
            password: ''
        },
		userInfo: {}
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		setToken(state, token) {
			state.token = token;
		},
		setUserInfo(state, data) {
			state.userInfo = data
		}
    }
})

export default store
