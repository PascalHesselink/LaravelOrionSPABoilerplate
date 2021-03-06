const files   = require.context('./modules', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    if (key === './autoloader.js') return;
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default modules;
