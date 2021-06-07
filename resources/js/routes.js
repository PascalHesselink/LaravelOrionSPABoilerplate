import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';

// Auth level
// 0 - All users can view this page whether thewy are authenticated or not
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
        }
    ],
    mode   : 'history'
}
