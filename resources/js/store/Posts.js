import axios from 'axios';

const state = {
    posts : null
};

const getters = {
    getPosts : (state) => state.posts
};

const actions = {
    async fetchPosts({commit}) {
        return await axios.get('/api/posts').then((res) => {
            commit('setPosts', res.data.data);
        }).catch(err => {
            alert(err);
        });
    }
};

const mutations = {
    setPosts : (state, data) => {
        state.posts = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
