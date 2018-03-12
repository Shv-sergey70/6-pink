var gulp = require('gulp');
var less = require('gulp-less'); //Подключаем Less пакет

gulp.watch('source/less/**/*.less', ['less']);
browserSync = require('browser-sync');

gulp.task('less', function(){ // Создаем таск "less"
    return gulp.src('source/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем Sass в CSS посредством gulp-less
        .pipe(gulp.dest('source/css')) // Выгружаем результата в папку source/css
});

gulp.task('watch', function() {
    gulp.watch('source/less/**/*.less', ['less']); // Наблюдение за less файлами
    // Наблюдение за другими типами файлов
});

gulp.task('sass', function(){ // Создаем таск Less
    return gulp.src('source/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
        .pipe(gulp.dest('source/css')) // Выгружаем результата в папку source/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'source' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('source/less/**/*.less', ['less']); // Наблюдение за less файлами
    gulp.watch('source/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('source/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
    // Наблюдение за другими типами файлов
});
