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
        return await axios.post('/auth/me').then((res) => {
            commit('setUser', res.data.user);
            commit('setGeneralData', res.data);
        }).catch(err => {
            this.dispatch('clearSession');
        });
    },
    async clearSession({commit}) {
        return await axios.post('/auth/logout')
                          .then((res) => {
                              commit('setAccessToken', '');
                              commit('setUser', '');

                              localStorage.removeItem('user-token');
                              localStorage.removeItem('user-data');
                          });
    }
};

const mutations = {
    setUser        : (state, user) => {
        state.user = user;
        localStorage.setItem('user-data', JSON.stringify(user));
    },
    setAccessToken : (state, access_token) => {
        state.access_token = access_token;
        localStorage.setItem('user-token', access_token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
