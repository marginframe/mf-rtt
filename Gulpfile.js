// Include gulp
var gulp = require('gulp');

// Plug-ins
var lr = require('tiny-lr'),
    server = lr();
require('matchdep')
    .filterDev('gulp-*')
    .forEach(function(module) {
    global[module.replace(/^gulp-/, '')] = require(module);
});
 
var paths = {
    scripts:  'assets/js/**/*.js',
    images:   'assets/images/**/*',
    sass:     'assets/scss/**/*.scss',
    css:     'assets/css/styles.css',
    devCss:   'assets/css',
    devJs:   'assets/js',
    buildImg: 'build/images',
    builCss:  'build/css',
    buildJs:  'build/js'
};

// Include Plugins
// Concatinate all js files
gulp.task('concat', function(){
    gulp.src(paths.scripts)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.buildJs));
});

// Compress all images in paths.images
gulp.task('images', function() {
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.buildImg));
});

gulp.task('sass', function(){
    gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest(paths.devCss))
        .pipe(livereload(server));
});

gulp.task('csso', function(){
    gulp.src(paths.css)
        .pipe(csso())
        .pipe(gulp.dest(paths.devCss))
});

gulp.task('html', function(){
    gulp.src('*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(livereload(server));
})

gulp.task('myLog', function(){  
    server.listen(35729, function(err){
        if(err) return console.log(err);
    });
});

gulp.task('watch',function(){
    gulp.run('myLog');
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(['*.html'], ['html']);
})
