module.exports = {
    plugins: [
        require('@tailwindcss/typography'),
        // ...
      ],
    theme: {
        extend: {
            colors: {
                'dark': '#0D0D0D',
                'light': '#F5F4FF',
                'accent': '#979797',
            },
            screens: {
                '3xl': '1800px',
                '4xl': '2200px',
                '5xl': '2600px',
                '6xl': '3000px',
                '7xl': '3400px',
            }
        }
    }
    
}

