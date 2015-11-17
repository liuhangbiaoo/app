module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); //加载所有的任务
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        //开始
        //监听文件等
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: 'src',
            },
        },
        //合并
        connect: {
            options: {
                // port: 9000,
                // hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
                // livereload: 35729 //声明给 watch 监听的端口
                livereload: true
            },
            server: {
                options: {
                    open: true, //自动打开网页 http://
                    base: [
                        'src' //主目录
                    ]
                }
            }
        },
        //结束
    });
    // 默认任务
    grunt.registerTask('default', ['connect:server', 'watch']);
}
