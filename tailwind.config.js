const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        // './vendor/laravel/jetstream/**/*.blade.php',
        './resources/views/vendor/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'norvus': {
                    101: '#1aaaa8',
                    201: '#198082',
                    202: '#9ad7d8',
                    301: '#04647c',
                    302: '#505494',
                    303: '#292a65',
                },
                // ...
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
