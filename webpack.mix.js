const mix         = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve : {fallback : {fs : false}}
});

mix.js('resources/js/app.js', 'public/js').vue();

mix.sass('resources/sass/app.scss', 'public/css').options({
    processCssUrls : false,
    postCss        : [tailwindcss('tailwind.config.js')]
});

mix.browserSync({
    proxy : 'https://laravelorionspaboilerplate.dev'
}).options({
    watchOptions : {
        ignored : /node_modules/
    }
});
