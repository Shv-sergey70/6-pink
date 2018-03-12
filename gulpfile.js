var gulp = require('gulp');
var less = require('gulp-less'); //Подключаем Less пакет
var browserSync  = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('less', function(){ // Создаем таск Less
    return gulp.src('source/less/style.less') // Берем источник
        .pipe(plumber())
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
        .pipe(gulp.dest('source/css')) // Выгружаем результата в папку source/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'source' // Директория для сервера - source
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('source/**/*.less', ['less']); // Наблюдение за less файлами
    gulp.watch('source/*.html', browserSync.reload);
    // Наблюдение за другими типами файлов
});
