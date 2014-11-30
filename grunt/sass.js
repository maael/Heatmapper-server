module.exports = {
    // Development settings
    dev: {
        options: {
            outputStyle: 'nested',
            sourceMap: true
        },
        files: [{
            expand: true,
            cwd: 'public/src/sass',
            src: ['*.scss'],
            dest: 'public/stylesheets',
            ext: '.css'
        }]
    },
    // Production settings
    prod: {
        options: {
            outputStyle: 'compressed',
            sourceMap: false
        },
        files: [{
            expand: true,
            cwd: 'public/src/sass',
            src: ['*.scss'],
            dest: 'public/stylesheets',
            ext: '.css'
        }]
    }
};