<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">
	<link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<link rel="icon" href="favicon.ico">
	<title>PHP Vuetify</title>
</head>

<body>
	<div id="app"></div>


	<script>
		var require = {
			baseUrl: '/php-vue/modulos/a/',
			paths: {
				'vue': '//cdn.jsdelivr.net/npm/vue/dist/vue',
				'vuetify': '//cdn.jsdelivr.net/npm/vuetify/dist/vuetify'
			}
		};

		loadCss = function (config) {
			var head = document.getElementsByTagName('head')[0];

			if (config.content) {
				var style = document.createElement('style');
				style.type = 'text/css';

				if (style.styleSheet)
					style.styleSheet.cssText = config.content;
				else
					style.innerHTML = config.content;

				head.appendChild(style);
			} else if (config.url) {
				var link = document.createElement('link');
				link.href = config.url;
				link.rel = 'stylesheet';
				link.type = 'text/css';
				head.appendChild(link);
			}
		};
	</script>
	<!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
	<!-- <script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"></script> -->
	<script data-main="public/main" src="//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.js"></script>
	<script src="http://192.168.0.23:35729/livereload.js?snipver=1"></script>
</body>

</html>