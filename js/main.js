var themes = {
	'amelia': '/css/vendor/amelia/bootstrap.min.css',
	'cerulean': '/css/vendor/cerulean/bootstrap.min.css',
	'cosmo': '/css/vendor/cosmo/bootstrap.min.css',
	'cyborg': '/css/vendor/cyborg/bootstrap.min.css',
	'darkly': '/css/vendor/darkly/bootstrap.min.css',
	'default': '/css/vendor/default/bootstrap.min.css',
	'flatly': '/css/vendor/flatly/bootstrap.min.css',
	'journal': '/css/vendor/journal/bootstrap.min.css',
	'lumen': '/css/vendor/lumen/bootstrap.min.css',
	'readable': '/css/vendor/readable/bootstrap.min.css',
	'simplex': '/css/vendor/simplex/bootstrap.min.css',
	'slate': '/css/vendor/slate/bootstrap.min.css',
	'spacelab': '/css/vendor/spacelab/bootstrap.min.css',
	'superhero': '/css/vendor/superhero/bootstrap.min.css',
	'united': '/css/vendor/united/bootstrap.min.css',
	'yeti': '/css/vendor/yeti/bootstrap.min.css'
}

$(function(){
   var themesheet = $('<link href="'+themes['darkly']+'" rel="stylesheet" />');
    themesheet.appendTo('head');
    $('.theme-link').click(function(){
       var themeurl = themes[$(this).attr('data-theme')]; 
        themesheet.attr('href',themeurl);
    });
});