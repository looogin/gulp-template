const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const lighthouse = require('./gulp/tasks/lighthouse')

const dev = gulp.parallel(pug2html, styles, script, fonts, imageMinify)

const build = gulp.series(clean, copyDependencies, dev)

module.exports.start = gulp.series(build, serve)
module.exports.build = build

module.exports.lighthouse = gulp.series(lighthouse)
