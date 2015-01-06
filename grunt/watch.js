module.exports = {
  scripts: {
    files: [
      '**/*.scss',
      '**/*.jade',
      '**/*.js'
    ],
    tasks: [
      'dev'
    ],
    options: {
      spawn: false
    }
  }
};