'use strict';

var module = angular.module('exampleApp', ['language-picker','ngSanitize']);
  module.controller('MainCtrl', function ($scope, $modal,$compile) {
    /*$scope.codeSamples = [
    'var module = angular.module("myApp", ["language-picker"]);',
    '<language-picker languages="[\'en-US\', \'fr-FR\']" on-change="someCallback(language)" flags="true" template="custom.tpl.html">\n   Choose language\n</language-picker>',
    '<language-picker languages="[\'en-US\', \'fr-FR\']" on-change="someCallback(language)">Choose language</language-picker>'
    ];*/
    var lgs = '[\'en-US\', \'es-AR\', \'sk-SK\', \'zh-CN\', \'fa-IR\', \'fr\', \'he-IL\', \'ru\', \'de-CH\']';

   $scope.codeSamples = {
     basic: '<language-picker languages="[\'en-US\',\'de\',\'fr\']" on-change="onLanguageChange(language)">\n  Language Picker\n</language-picker>',
     typical: '<language-picker languages="'+lgs+'" on-change="onLanguageChange(language)">\n  Language Picker\n</language-picker>',
     noFlags: '<language-picker languages="'+lgs+'" on-change="onLanguageChange(language)"  flags="false">\n  Language Picker\n</language-picker>',
     customModal: '<language-picker languages="'+lgs+'" on-change="onLanguageChange(language)"  flags="false">\n  Language Picker\n</language-picker>',
     attributes: '<language-picker languages="'+lgs+'" on-change="onLanguageChange(language)" template="custom.tpl.html">\n   Choose language\n</language-picker>',
     supportedLangs: ['en-US', 'es-AR', 'sk-SK', 'zh-CN', 'fa-IR', 'fr', 'he-IL', 'ru', 'de-CH']
   };
});

module.controller('SampleCtrl', function ($scope, $modal) {

  $scope.show = false;
  $scope.onLanguageChange = function (language) {
    $scope.language = language;
    $scope.show = true;
  };
});
