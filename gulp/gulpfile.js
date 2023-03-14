const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// exports.default = async (done) => {
//     console.log('default');
//     done();
// }

exports.default = async () => {
    console.log('default');
}

exports.copy = async () => {
    return src('./styles/*.scss').pipe(dest('output'));
}

exports.transform = async () => {
    return src('./styles/*.scss').pipe(sass()).pipe(dest('dist'));
}

function styles() {
    return src('./styles/*.scss').pipe(sass()).pipe(dest('dist'));
}

exports["build:watch"] = () => {
    return watch('./styles/*.scss', styles);
}