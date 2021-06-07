import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';

import PostsIndex from './pages/Posts/Index';
import PostForm from './pages/Posts/Form';

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
            name      : 'posts.index',
            path      : '/posts/index',
            component : PostsIndex,
            meta      : {
                authLevel : 1
            }
        },
        {
            name      : 'posts.create',
            path      : '/posts/create',
            component : PostForm,
            meta      : {
                authLevel : 1
            }
        },
        {
            name      : 'posts.edit',
            path      : '/posts/:id/edit',
            component : PostForm,
            meta      : {
                authLevel : 1
            }
        },
        {
            name      : 'posts.duplicate',
            path      : '/posts/:id/duplicate',
            component : PostForm,
            meta      : {
                authLevel : 1
            }
        }
    ],
    mode   : 'history'
}
