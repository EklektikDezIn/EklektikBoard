(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "name": "files_mediaviewer",
  "version": "0.1.0",
  "description": "Viewer for pictures and videos integrated in the files app",
  "dependencies": {
    "swiper": "^4.5.0",
    "vue": "^2.6.10",
    "vue-router": "^3.0.6",
    "vuex": "^3.1.0"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babelify": "^8.0.0",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.2.2",
    "grunt": "^1.0.4",
    "grunt-browserify": "^5.3.0",
    "grunt-contrib-watch": "^1.1.0",
    "grunt-force": "^1.0.0",
    "grunt-postcss": "^0.9.0",
    "grunt-sass": "^3.0.2",
    "node-sass": "^4.12.0",
    "vueify": "^9.4.1"
  },
  "browse": {
    "vue": "vue/dist/vue.common.js"
  },
  "scripts": {
    "build": "grunt default",
    "watch": "grunt watcher",
    "lint:js": "eslint ./src/scripts/*.js",
    "lint:vue": "eslint ./src/scripts/*.vue"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/owncloud/files_mediaviewer.git"
  },
  "keywords": [
    "owncloud",
    "media",
    "gallery"
  ],
  "author": "Felix Heidecke",
  "license": "GPL-2.0",
  "bugs": {
    "url": "https://github.com/owncloud/files_mediaviewer/issues"
  },
  "homepage": "https://github.com/owncloud/files_mediaviewer#readme"
}

},{}],2:[function(require,module,exports){
module.exports={
	"swiper" : {
		"speed" : 300,
		"effect" : "slide"
	},
	"mimetypes": [
		"video/mp4",
		"video/ogg",
		"video/webm"
	]
}
},{}],3:[function(require,module,exports){
'use strict';

if (!OCA.Mediaviewer) {
	/**
  * @namespace
  */
	OCA.Mediaviewer = {};
}

OCA.Mediaviewer.app = require('./setup.js').default;

$(document).ready(function () {
	var app = OCA.Mediaviewer.app;
	var mountPoint = $('<div>', {
		id: app.name,
		html: '<div>'
	});

	if (!OCA.Files) {
		return;
	}

	// ---- Register fileactions -------

	var actionHandler = function actionHandler(fileName, context) {
		$('body').append(mountPoint);

		OCA.Mediaviewer.files = context.fileList.files;

		OC.addScript(app.name, app.name).then(function () {
			OC.redirect(OC.joinPaths('#', app.name, fileName));
		});
	};

	app.config.mimetypes.forEach(function (mimetype) {

		var ViewMedia = {
			mime: mimetype,
			name: app.name,
			permissions: OC.PERMISSION_READ,
			actionHandler: actionHandler
		};

		OCA.Files.fileActions.registerAction(ViewMedia);
		OCA.Files.fileActions.setDefault(mimetype, app.name);
	});
});

},{"./setup.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pkg = void 0,
    config = void 0,
    enabledImages = void 0;

pkg = require('../../package.json');
config = require('../config.json');

// Add enabledPreviewProviders to mimeType list
enabledImages = _.filter(OC.appConfig.core.enabledPreviewProviders, function (mimeType) {
  return !mimeType.search('image');
});
enabledImages = _.map(enabledImages, function (mimeType) {
  return mimeType.replace(/\\/g, '');
}); // strip slashes

config.mimetypes = config.mimetypes.concat(enabledImages);

pkg['config'] = config;

exports.default = pkg;

},{"../../package.json":1,"../config.json":2}]},{},[3]);
