import axios from 'axios';

const state = {
    user         : '',
    access_token : ''
};

const getters = {
    getUser  : (state) => state.user,
    getToken : (state) => state.access_token
};

const actions = {
    async fetchAuthUser({commit}) {
        return await axios.get('/api/auth/me').then((res) => {
            commit('setUser', res.data.user);
        }).catch(err => {
            this.dispatch('clearSession');
        });
    },
    async clearSession({commit}) {
        return await axios.post('/api/auth/logout')
                          .then((res) => {
                              commit('setAccessToken', '');
                              commit('setUser', '');
                          });
    }
};

const mutations = {
    setUser        : (state, user) => {
        state.user = user;

        if (user) {
            localStorage.setItem('user-data', JSON.stringify(user));
        } else {
            localStorage.removeItem('user-data');
        }
    },
    setAccessToken : (state, access_token) => {
        state.access_token = access_token;

        if (access_token) {
            localStorage.setItem('user-token', access_token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        } else {
            localStorage.removeItem('user-token');
            axios.defaults.headers.common['Authorization'] = null;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
