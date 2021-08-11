import axios from 'axios';

export function authenticate(store, route) {
    axios.interceptors.request.use(function (config) {
        if (window.events) window.events.$emit('setPageLoading', true);

        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        if (window.events) window.events.$emit('setPageLoading', false);

        return response;
    }, (error) => {
        if (window.events) window.events.$emit('setPageLoading', false);

        if (
            error.response.status === 401
        ) {
            store.commit('setUser', null);
            store.commit('setAccessToken', null);

            route.push({
                name : 'login'
            });
        }

        return Promise.reject(error);
    });

    route.beforeEach((to, from, next) => {
        let Authentication = store.state.Authentication.user;
        let AuthLevel      = to.meta.authLevel;

        switch (AuthLevel) {
            case undefined:
                next();
                break;
            case 0: // Both authenticated users and guest may view this route
                next();
                break;
            case 1: // User needs to be authenticated, of not he or she will be redirected to the login page
                if (!Authentication)
                    return next({
                        name : 'login'
                    });
                else
                    next();
                break;
            case 2: // User may not be authenticated to view this route, only guests
                if (Authentication)
                    return next({
                        name : 'index'
                    });
                else
                    next();
                break;
        }
    });

    store.subscribeAction({
        after : (action, state) => {
            if (action.type === 'clearSession') route.push({
                name : 'login'
            });
        }
    })
}
