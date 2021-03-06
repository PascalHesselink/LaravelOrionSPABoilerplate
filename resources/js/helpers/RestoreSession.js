export async function restoreSession(store, router) {
    let accessToken = localStorage.getItem('user-token');
    let userData    = localStorage.getItem('user-data');

    if (userData)
        store.commit('setUser', JSON.parse(userData));

    if (accessToken) {
        store.commit('setAccessToken', accessToken);
        store.dispatch('fetchAuthUser');
    }
}
