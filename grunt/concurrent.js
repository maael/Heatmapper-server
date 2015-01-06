module.exports = {

    // Task options
    options: {
        limit: 4
    },
    devWatch: [
        "watch"
    ],
    // Dev tasks
    devFirst: [
        //'clean'
    ],
    devSecond: [
        'sass:dev',
		//'jshint',
        'uglify'
    ],
	
	testFirst: [
		'mocha'
	],

    // Production tasks
    prodFirst: [
        'clean'
    ],
    prodSecond: [
        'sass:prod',
        'uglify'
    ]
};