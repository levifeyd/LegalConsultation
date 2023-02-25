const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/resources/js')
    .js('resources/js/filter.js','public/resources/js')
    .js('resources/js/filter_id.js','public/resources/js')
    .js('resources/js/filter_date.js','public/resources/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
