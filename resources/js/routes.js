import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';

import PostsIndex from './pages/Posts/Index';
import PostForm from './pages/Posts/Form';

const childrenWithPrefix = (prefix, routes) => {
    return {
        children  : routes.map(route => {
            route.name = `${prefix}.${route.name}`
            route.path = `${prefix}/${route.path}`

            return route;
        }),
        path      : '',
        component : {
            render : (c) => c('router-view')
        }
    };
}

// Auth level
// 0 - All users can view this page whether they are authenticated or not
// 1 - Users should be authenticated to view this page
// 2 - Only guests can view this page

export default {
    routes : [
        {
            name      : 'index',
            path      : '/',
            component : Index,
            meta      : {
                authLevel : 0
            }
        },
        {
            name      : 'login',
            path      : '/login',
            component : Login,
            meta      : {
                authLevel : 2
            }
        },
        {
            name      : 'register',
            path      : '/register',
            component : Register,
            meta      : {
                authLevel : 2
            }
        },

        {
            ...childrenWithPrefix('posts', [
                {
                    name      : 'index',
                    path      : 'index',
                    component : PostsIndex,
                    meta      : {
                        authLevel : 1
                    }
                },
                {
                    name      : 'create',
                    path      : 'create',
                    component : PostForm,
                    meta      : {
                        authLevel : 1
                    }
                },
                {
                    name      : 'edit',
                    path      : ':id/edit',
                    component : PostForm,
                    meta      : {
                        authLevel : 1
                    }
                },
                {
                    name      : 'duplicate',
                    path      : ':id/duplicate',
                    component : PostForm,
                    meta      : {
                        authLevel : 1
                    }
                }
            ])
        }
    ],
    mode   : 'history'
}
