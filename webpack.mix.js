const mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js')
    .sass('src/sass/app.scss', 'public/css');