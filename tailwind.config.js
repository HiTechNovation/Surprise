/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**.html"],
    theme: {
        extend: {
            boxShadow: {
                'multi-color': '5px 5px 50px red, -5px -5px 50px blue',
            },
        },
    },
    plugins: [],
}