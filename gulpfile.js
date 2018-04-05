var gulp = require('gulp');
var less = require('gulp-less'); //Подключаем Less пакет
var plumber = require('gulp-plumber');

gulp.task('less', function(){ // Создаем таск Less
    return gulp.src('source/less/style.less') // Берем источник
        .pipe(plumber())
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
        .pipe(gulp.dest('source/css')) // Выгружаем результата в папку source/css
});

gulp.task('watch', ['less'], function() {
    gulp.watch('source/**/*.less', ['less']); // Наблюдение за less файлами
    // Наблюдение за другими типами файлов
});
