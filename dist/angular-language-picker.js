(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return (root.languageMappingList = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.languageMappingList = factory();
  }
}(this, function() {
  return {
    'ach': {
      nativeName: "Lwo",
      englishName: "Acholi"
    },
    'ady': {
      nativeName: "Адыгэбзэ",
      englishName: "Adyghe"
    },
    'af': {
      nativeName: "Afrikaans",
      englishName: "Afrikaans"
    },
    'af-NA': {
      nativeName: "Afrikaans (Namibia)",
      englishName: "Afrikaans (Namibia)"
    },
    'af-ZA': {
      nativeName: "Afrikaans (South Africa)",
      englishName: "Afrikaans (South Africa)"
    },
    'ak': {
      nativeName: "Tɕɥi",
      englishName: "Akan"
    },
    'ar': {
      nativeName: "العربية",
      englishName: "Arabic"
    },
    'ar-AR': {
      nativeName: "العربية",
      englishName: "Arabic"
    },
    'ay-BO': {
      nativeName: "Aymar aru",
      englishName: "Aymara"
    },
    'az-AZ': {
      nativeName: "Azərbaycan dili",
      englishName: "Azerbaijani"
    },
    'be-BY': {
      nativeName: "Беларуская",
      englishName: "Belarusian"
    },
    'bg-BG': {
      nativeName: "Български",
      englishName: "Bulgarian"
    },
    'bn': {
      nativeName: "বাংলা",
      englishName: "Bengali"
    },
    'bn-IN': {
      nativeName: "বাংলা (ভারত)",
      englishName: "Bengali (India)"
    },
    'bn-BD': {
      nativeName: "বাংলা(বাংলাদেশ)",
      englishName: "Bengali (Bangladesh)"
    },
    'bs-BA': {
      nativeName: "Bosanski",
      englishName: "Bosnian"
    },
    'ca': {
      nativeName: "Català",
      englishName: "Catalan"
    },
    'ca-ES': {
      nativeName: "Català",
      englishName: "Catalan"
    },
    'ck-US': {
      nativeName: "ᏣᎳᎩ (tsalagi)",
      englishName: "Cherokee"
    },
    'cs': {
      nativeName: "Čeština",
      englishName: "Czech"
    },
    'cs-CZ': {
      nativeName: "Čeština",
      englishName: "Czech"
    },
    'cy-GB': {
      nativeName: "Cymraeg",
      englishName: "Welsh"
    },
    'da-DK': {
      nativeName: "Dansk",
      englishName: "Danish"
    },
    'de': {
      nativeName: "Deutsch",
      englishName: "German"
    },
    'de-AT': {
      nativeName: "Deutsch (Austria)",
      englishName: "German (Austria)"
    },
    'de-DE': {
      nativeName: "Deutsch (Deutschland)",
      englishName: "German (Germany)"
    },
    'de-CH': {
      nativeName: "Deutsch (Switzerland)",
      englishName: "German (Switzerland)"
    },
    'el': {
      nativeName: "Ελληνικά",
      englishName: "Greek"
    },
    'el-GR': {
      nativeName: "Ελληνικά",
      englishName: "Greek (Greece)"
    },
    'en': {
      nativeName: "English",
      englishName: "English"
    },
    'en-GB': {
      nativeName: "English (UK)",
      englishName: "English (UK)"
    },
    'en-CA': {
      nativeName: "English (Canada)",
      englishName: "English (Canada)"
    },
    'en-IN': {
      nativeName: "English (India)",
      englishName: "English (India)"
    },
    'en-PI': {
      nativeName: "English (Pirate)",
      englishName: "English (Pirate)"
    },
    'en-UD': {
      nativeName: "English (Upside Down)",
      englishName: "English (Upside Down)"
    },
    'en-US': {
      nativeName: "English (US)",
      englishName: "English (US)"
    },
    'en@pirate': {
      nativeName: "English (Pirate)",
      englishName: "English (Pirate)"
    },
    'eo': {
      nativeName: "Esperanto",
      englishName: "Esperanto"
    },
    'eo-EO': {
      nativeName: "Esperanto",
      englishName: "Esperanto"
    },
    'es': {
      nativeName: "Español",
      englishName: "Spanish"
    },
    'es-AR': {
      nativeName: "Español (Argentine)",
      englishName: "Spanish (Argentina)"
    },
    'es-419': {
      nativeName: "Español (Latino America)",
      englishName: "Spanish (Latin America)"
    },
    'es-CL': {
      nativeName: "Español (Chile)",
      englishName: "Spanish (Chile)"
    },
    'es-CO': {
      nativeName: "Español (Colombia)",
      englishName: "Spanish (Colombia)"
    },
    'es-EC': {
      nativeName: "Español (Ecuador)",
      englishName: "Spanish (Ecuador)"
    },
    'es-ES': {
      nativeName: "Español (España)",
      englishName: "Spanish (Spain)"
    },
    'es-LA': {
      nativeName: "Español",
      englishName: "Spanish (Latin)"
    },
    'es-NI': {
      nativeName: "Español Nicaragüense",
      englishName: "Spanish (Nicaragua)"
    },
    'es-MX': {
      nativeName: "Español (México)",
      englishName: "Spanish (Mexico)"
    },
    'es-VE': {
      nativeName: "Español (Venezuela)",
      englishName: "Spanish (Venezuela)"
    },
    'et': {
      nativeName: "eesti keel",
      englishName: "Estonian"
    },
    'et-EE': {
      nativeName: "Eesti (Estonia)",
      englishName: "Estonian (Estonia)"
    },
    'eu': {
      nativeName: "Euskara",
      englishName: "Basque"
    },
    'eu-ES': {
      nativeName: "Euskara",
      englishName: "Basque"
    },
    'fa': {
      nativeName: "فارسی",
      englishName: "Persian"
    },
    'fa-IR': {
      nativeName: "فارسی",
      englishName: "Persian"
    },
    'fb-LT': {
      nativeName: "Leet Speak",
      englishName: "Leet"
    },
    'ff': {
      nativeName: "Fulah",
      englishName: "Fulah"
    },
    'fi': {
      nativeName: "Suomi",
      englishName: "Finnish"
    },
    'fi-FI': {
      nativeName: "Suomi",
      englishName: "Finnish"
    },
    'fo-FO': {
      nativeName: "Føroyskt",
      englishName: "Faroese"
    },
    'fr': {
      nativeName: "Français",
      englishName: "French"
    },
    'fr-CA': {
      nativeName: "Français (Canada)",
      englishName: "French (Canada)"
    },
    'fr-FR': {
      nativeName: "Français (France)",
      englishName: "French (France)"
    },
    'fy-NL': {
      nativeName: "Frysk",
      englishName: "Frisian (West)"
    },
    'ga': {
      nativeName: "Gaeilge",
      englishName: "Irish"
    },
    'ga-IE': {
      nativeName: "Gaeilge (Gaelic)",
      englishName: "Irish (Gaelic)"
    },
    'gl': {
      nativeName: "Galego",
      englishName: "Galician"
    },
    'gl-ES': {
      nativeName: "Galego",
      englishName: "Galician"
    },
    'gn-PY': {
      nativeName: "Avañe'ẽ",
      englishName: "Guarani"
    },
    'gu-IN': {
      nativeName: "ગુજરાતી",
      englishName: "Gujarati"
    },
    'gx-GR': {
      nativeName: "Ἑλληνική ἀρχαία",
      englishName: "Classical Greek"
    },
    'he': {
      nativeName: "עברית‏",
      englishName: "Hebrew"
    },
    'he-IL': {
      nativeName: "עברית‏",
      englishName: "Hebrew"
    },
    'hi': {
      nativeName: "हिन्दी",
      englishName: "Hindi"
    },
    'hi-IN': {
      nativeName: "हिन्दी",
      englishName: "Hindi"
    },
    'hr-HR': {
      nativeName: "Hrvatski",
      englishName: "Croatian"
    },
    'hu': {
      nativeName: "Magyar",
      englishName: "Hungarian"
    },
    'hu-HU': {
      nativeName: "Magyar",
      englishName: "Hungarian"
    },
    'hy-AM': {
      nativeName: "Հայերեն",
      englishName: "Armenian"
    },
    'id': {
      nativeName: "Bahasa Indonesia",
      englishName: "Indonesian"
    },
    'id-ID': {
      nativeName: "Bahasa Indonesia",
      englishName: "Indonesian"
    },
    'is': {
      nativeName: "Íslenska",
      englishName: "Icelandic"
    },
    'is-IS': {
      nativeName: "Íslenska (Iceland)",
      englishName: "Icelandic (Iceland)"
    },
    'it': {
      nativeName: "Italiano",
      englishName: "Italian"
    },
    'it-IT': {
      nativeName: "Italiano",
      englishName: "Italian"
    },
    'ja': {
      nativeName: "日本語",
      englishName: "Japanese"
    },
    'ja-JP': {
      nativeName: "日本語",
      englishName: "Japanese"
    },
    'jv-ID': {
      nativeName: "Basa Jawa",
      englishName: "Javanese"
    },
    'ka-GE': {
      nativeName: "ქართული",
      englishName: "Georgian"
    },
    'kk-KZ': {
      nativeName: "Қазақша",
      englishName: "Kazakh"
    },
    'km': {
      nativeName: "ភាសាខ្មែរ",
      englishName: "Khmer"
    },
    'km-KH': {
      nativeName: "ភាសាខ្មែរ",
      englishName: "Khmer"
    },
    'kn': {
      nativeLanguage: "ಕನ್ನಡ",
      englishName: "Kannada"
    },
    'kn-IN': {
      nativeName: "ಕನ್ನಡ (India)",
      englishName: "Kannada (India)"
    },
    'ko': {
      nativeName: "한국어",
      englishName: "Korean"
    },
    'ko-KR': {
      nativeName: "한국어 (韩国)",
      englishName: "Korean (Korea)"
    },
    'ku-TR': {
      nativeName: "Kurdî",
      englishName: "Kurdish"
    },
    'la': {
      nativeName: "Latin",
      englishName: "Latin"
    },
    'la-VA': {
      nativeName: "Latin",
      englishName: "Latin"
    },
    'lb': {
      nativeName: "Lëtzebuergesch",
      englishName: "Luxembourgish"
    },
    'li-NL': {
      nativeName: "Lèmbörgs",
      englishName: "Limburgish"
    },
    'lt-LT': {
      nativeName: "Lietuvių",
      englishName: "Lithuanian"
    },
    'lv-LV': {
      nativeName: "Latviešu",
      englishName: "Latvian"
    },
    'mai': {
      nativeName: "मैथिली, মৈথিলী",
      englishName: "Maithili"
    },
    'mg-MG': {
      nativeName: "Malagasy",
      englishName: "Malagasy"
    },
    'mk': {
      nativeName: "Македонски",
      englishName: "Macedonian"
    },
    'mk-MK': {
      nativeName: "Македонски (Македонски)",
      englishName: "Macedonian (Macedonian)"
    },
    'ml': {
      nativeName: "മലയാളം",
      englishName: "Malayalam"
    },
    'ml-IN': {
      nativeName: "മലയാളം",
      englishName: "Malayalam"
    },
    'mn-MN': {
      nativeName: "Монгол",
      englishName: "Mongolian"
    },
    'mr': {
      nativeName: "मराठी",
      englishName: "Marathi"
    },
    'mr-IN': {
      nativeName: "मराठी",
      englishName: "Marathi"
    },
    'ms': {
      nativeName: "Bahasa Melayu",
      englishName: "Malay"
    },
    'ms-MY': {
      nativeName: "Bahasa Melayu",
      englishName: "Malay"
    },
    'mt-MT': {
      nativeName: "Malti",
      englishName: "Maltese"
    },
    'my': {
      nativeName: "ဗမာစကာ",
      englishName: "Burmese"
    },
    'nb': {
      nativeName: "Norsk (bokmål)",
      englishName: "Norwegian (bokmal)"
    },
    'nb-NO': {
      nativeName: "Norsk (bokmål)",
      englishName: "Norwegian (bokmal)"
    },
    'ne': {
      nativeName: "नेपाली",
      englishName: "Nepali"
    },
    'ne-NP': {
      nativeName: "नेपाली",
      englishName: "Nepali"
    },
    'nl': {
      nativeName: "Nederlands",
      englishName: "Dutch"
    },
    'nl-BE': {
      nativeName: "Nederlands (België)",
      englishName: "Dutch (België)"
    },
    'nl-NL': {
      nativeName: "Nederlands, Dutch",
      englishName: "Netherlands, Dutch"
    },
    'nn-NO': {
      nativeName: "Norsk (nynorsk)",
      englishName: "Norwegian (nynorsk)"
    },
    'oc': {
      nativeName: "Occitan",
      englishName: "Occitan"
    },
    'or-IN': {
      nativeName: "ଓଡ଼ିଆ",
      englishName: "Oriya"
    },
    'pa': {
      nativeName: "ਪੰਜਾਬੀ",
      englishName: "Punjabi"
    },
    'pa-IN': {
      nativeName: "ਪੰਜਾਬੀ (ਭਾਰਤ ਨੂੰ)",
      englishName: "Punjabi (India)"
    },
    'pl-PL': {
      nativeName: "Polski",
      englishName: "Polish"
    },
    'ps-AF': {
      nativeName: "پښتو",
      englishName: "Pashto"
    },
    'pt': {
      nativeName: "Português",
      englishName: "Portuguese"
    },
    'pt-BR': {
      nativeName: "Português (Brasil)",
      englishName: "Portuguese (Brazil)"
    },
    'pt-PT': {
      nativeName: "Português (Portugal)",
      englishName: "Portuguese (Portugal)"
    },
    'qu-PE': {
      nativeName: "Qhichwa",
      englishName: "Quechua"
    },
    'rm-CH': {
      nativeName: "Rumantsch",
      englishName: "Romansh"
    },
    'ro': {
      nativeName: "Română",
      englishName: "Romanian"
    },
    'ro-RO': {
      nativeName: "Română",
      englishName: "Romanian"
    },
    'ru': {
      nativeName: "Русский",
      englishName: "Russian"
    },
    'ru-RU': {
      nativeName: "Русский",
      englishName: "Russian"
    },
    'sa-IN': {
      nativeName: "संस्कृतम्",
      englishName: "Sanskrit"
    },
    'se-NO': {
      nativeName: "Davvisámegiella",
      englishName: "Northern Sámi"
    },
    'si-LK': {
      nativeName: "පළාත",
      englishName: "Sinhala (Sri Lanka)"
    },
    'sk': {
      nativeName: "Slovenčina",
      englishName: "Slovak"
    },
    'sk-SK': {
      nativeName: "Slovenčina (Slovakia)",
      englishName: "Slovak (Slovakia)"
    },
    'sl': {
      nativeName: "Slovenščina",
      englishName: "Slovenian"
    },
    'sl-SI': {
      nativeName: "Slovenščina",
      englishName: "Slovenian"
    },
    'so-SO': {
      nativeName: "Soomaaliga",
      englishName: "Somali"
    },
    'sq': {
      nativeName: "Shqip",
      englishName: "Albanian"
    },
    'sq-AL': {
      nativeName: "Shqip",
      englishName: "Albanian"
    },
    'sr': {
      nativeName: "Српски",
      englishName: "Serbian"
    },
    'sr-RS': {
      nativeName: "Српски (Serbia)",
      englishName: "Serbian (Serbia)"
    },
    'su': {
      nativeName: "Basa Sunda",
      englishName: "Sundanese"
    },
    'sv': {
      nativeName: "Svenska",
      englishName: "Swedish"
    },
    'sv-SE': {
      nativeName: "Svenska",
      englishName: "Swedish"
    },
    'sw': {
      nativeName: "Kiswahili",
      englishName: "Swahili"
    },
    'sw-KE': {
      nativeName: "Kiswahili",
      englishName: "Swahili (Kenya)"
    },
    'ta': {
      nativeName: "தமிழ்",
      englishName: "Tamil"
    },
    'ta-IN': {
      nativeName: "தமிழ்",
      englishName: "Tamil"
    },
    'te': {
      nativeName: "తెలుగు",
      englishName: "Telugu"
    },
    'te-IN': {
      nativeName: "తెలుగు",
      englishName: "Telugu"
    },
    'tg-TJ': {
      nativeName: "тоҷикӣ",
      englishName: "Tajik"
    },
    'th': {
      nativeName: "ภาษาไทย",
      englishName: "Thai"
    },
    'th-TH': {
      nativeName: "ภาษาไทย (ประเทศไทย)",
      englishName: "Thai (Thailand)"
    },
    'tl': {
      nativeName: "Filipino",
      englishName: "Filipino"
    },
    'tl-PH': {
      nativeName: "Filipino",
      englishName: "Filipino"
    },
    'tl-ST': {
      nativeName: "tlhIngan-Hol",
      englishName: "Klingon"
    },
    'tr-TR': {
      nativeName: "Türkçe",
      englishName: "Turkish"
    },
    'tt-RU': {
      nativeName: "татарча",
      englishName: "Tatar"
    },
    'uk': {
      nativeName: "Українська",
      englishName: "Ukrainian"
    },
    'uk-UA': {
      nativeName: "Українська",
      englishName: "Ukrainian"
    },
    'ur': {
      nativeName: "اردو",
      englishName: "Urdu"
    },
    'ur-PK': {
      nativeName: "اردو",
      englishName: "Urdu"
    },
    'uz': {
      nativeName: "O'zbek",
      englishName: "Uzbek"
    },
    'uz-UZ': {
      nativeName: "O'zbek",
      englishName: "Uzbek"
    },
    'vi-VN': {
      nativeName: "Tiếng Việt",
      englishName: "Vietnamese"
    },
    'xh-ZA': {
      nativeName: "isiXhosa",
      englishName: "Xhosa"
    },
    'yi': {
      nativeName: "ייִדיש",
      englishName: "Yiddish"
    },
    'yi-DE': {
      nativeName: "ייִדיש (German)",
      englishName: "Yiddish (German)"
    },
    'zh': {
      nativeName: "中文",
      englishName: "Chinese"
    },
    'zh-Hans': {
      nativeName: "中文简体",
      englishName: "Chinese Simplified"
    },
    'zh-Hant': {
      nativeName: "中文繁體",
      englishName: "Chinese Traditional" 
    },
    'zh-CN': {
      nativeName: "中文（中国）",
      englishName: "Chinese Simplified (China)"
    },
    'zh-HK': {
      nativeName: "中文（香港）",
      englishName: "Chinese Traditional (Hong Kong)"
    },
    'zh-SG': {
      nativeName: "中文（新加坡）",
      englishName: "Chinese Simplified (Singapore)"
    },
    'zh-TW': {
      nativeName: "中文（台灣）",
      englishName: "Chinese Traditional (Taiwan)"
    },
    'zu-ZA': {
      nativeName: "isiZulu",
      englishName: "Zulu"
    }
  };
}));

(function(window, angular) {
  angular
    .module('language-picker', ['templates-languagePicker', 'ui.bootstrap'])
    .constant('langMap', window.languageMappingList)
    .directive('languagePicker', [
      '$uibModal',
      'langMap',
      function($uibModal, langMap) {
        return {
          restrict: 'A',
          transclude: true,
          scope: {
            languages: '=',
            callback: '&?onChange',
            model: '=?',
            empty: '@?',
            flags: '@?',
            icon: '@?',
            help: '@?',
            template: '@?'
          },
          templateUrl: 'language-picker-button.tpl.html',
          link: function(scope, elm, attrs, ctrl) {

            if (angular.isDefined(scope.icon)){
               if (scope.icon == 'icon'){
                  scope.ikon ='fa fa-language';
               } else {
                  scope.ikon = scope.icon;
              }
            }

            var flags;
            if (angular.isDefined(scope.flags)){
               if (scope.flags == 'flags'){
                  flags = true;
               } else {
                  flags = Boolean(scope.flags);
              }
            }

            var modalTemplateUrl = 'language-picker-dialog.tpl.html';
            if (angular.isDefined(scope.template)) {
              modalTemplateUrl = scope.template;
            }

            function getLangCodeWithLowDash(locale) {
              var splitLocale = locale.split('-');
              var locale = 'en_US';

              if (splitLocale.length > 1) {
                locale = (splitLocale[0].toLowerCase() + '_' + splitLocale[1].toUpperCase());
              } else {
                locale = splitLocale[0].toLowerCase();
              }

              return locale;
            }

            function getCountry(locale) {
              var splitLocale = locale.split('-');

              if (splitLocale.length > 1) {
                return splitLocale[1].toLowerCase();
              }

              return locale;
            }

            function createLanguageObj(locale) {
              var language = langMap[locale] || {
                nativeName: locale,
                englishName: locale
              };
              language.code = locale;
              language.country = getCountry(locale);
              language.asLowDashCode = function() {
                return getLangCodeWithLowDash(locale);
              };
              return language;
            }

            scope.open = function() {
              $uibModal.open({
                templateUrl: modalTemplateUrl,
                controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                  $scope.close = $uibModalInstance.close;
                  $scope.limitMin = 4;
                  $scope.limitMax = 24;
                  $scope.flags = flags;
                  $scope.ikon = scope.ikon;
                  $scope.help = scope.help;
                  $scope.empty = scope.empty;
                  $scope.languages = scope.languages.map(function(locale) {
                    return createLanguageObj(locale);
                  });

                  $scope.selectedLanguage = function(language) {
                    if (language){
                      scope.model  = language.code;
                    } else {
                      scope.model = undefined;
                    }
                    if (angular.isDefined(scope.callback)){
                      scope.callback()(language);
                    }
                    $uibModalInstance.close();
                  };
                }]
              });
            };

            elm.bind('click', scope.open);
          }
        };
      }
    ]);
}(this, this.angular));
/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var ngHtml2Js = require('gulp-ng-html2js');
var $ = require('gulp-load-plugins')();

gulp.task('build', ['compile', 'uglify']);

gulp.task('html2js', function() {
  return gulp
      .src(conf.paths.tmp + '/' + conf.paths.src + '/templates/*.tpl.html')
      .pipe($.bytediff.start())
      .pipe($.htmlmin({
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                      }))
      .pipe($.bytediff.stop())
      .pipe(ngHtml2Js({
        moduleName: 'templates-languagePicker',
        template: '$templateCache.put(\'<%= template.url %>\',\n \'<%= template.prettyEscapedContent %>\');'
                      }))
      .pipe($.concat(conf.appName))
      .pipe($.rename({
        suffix: '.js'
                     }))
      .pipe($.tap(function(file) {
        file.contents = Buffer.concat([
                                        new Buffer('(function(module) {\n' +
                                                   'try {\n' +
                                                   '  module = angular.module(' + '\'templates-languagePicker\'' + ');\n' +
                                                   '} catch (e) {\n' +
                                                   '  module = angular.module(' + '\'templates-languagePicker\'' + ', []);\n' +
                                                   '}\n' +
                                                   'module.run([\'$templateCache\',' +
                                                   ' function($templateCache)' +
                                                   ' {\n\'use strict\';\n'),
                                        file.contents,
                                        new Buffer('\n}]);\n' +
                                                   '})();\n')
                                      ]);
      }))
      .pipe($.rename({
        suffix: '.templates'
                     }))
      .pipe(gulp.dest(conf.paths.dist))
      .pipe($.htmlmin({
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                      }))
      .pipe($.header(conf.getDate()))
      .pipe($.rename({
                       suffix: '.min'
                     }))
      .pipe(gulp.dest(conf.paths.dist));

});

gulp.task('uglify', ['html2js'], function() {
  return gulp
      .src(['bower_components/langmap/language-mapping-list.js',
            conf.paths.src + '/**/*.js'])
      .pipe($.concat(conf.appName))
      .pipe($.rename({
        suffix: '.js'
                     }))
      .pipe(gulp.dest(conf.paths.dist))
      .pipe($.bytediff.start())
      .pipe($.uglify())
      .pipe($.header(conf.getDate()))
      .pipe($.rename({
        suffix: '.min'
                     }))
      .pipe($.bytediff.stop())
      .pipe(gulp.dest(conf.paths.dist));
});


/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var nib = require('nib');
var $ = require('gulp-load-plugins')();

gulp.task('compile', ['jade', 'stylus']);

gulp.task('clean', function() {
  return gulp
      .src(conf.paths.tmp)
      .pipe($.clean());
});

gulp.task('stylus', function() {
  return gulp
      .src(conf.paths.src + '/**/*.styl')
      .pipe($.stylus({
                       use: [nib()],
                       'include css': true
                     }))
      .pipe($.concat(conf.appName))
      .pipe($.rename({
        suffix: '.css'
                     }))
      .pipe($.bytediff.start())
      .pipe($.cssmin())
      .pipe($.rename({
        suffix: '.min'
                   }))
      .pipe($.header(conf.getDate()))
      .pipe($.bytediff.stop())
      .pipe(gulp.dest(conf.paths.dist));
});

gulp.task('jade', ['clean'], function() {
  return gulp
      .src(conf.paths.src + '/**/*.jade')
      .pipe($.jade({
                     pretty: true
                   }))
      .pipe(gulp.dest(conf.paths.tmp + '/' + conf.paths.src));
});

/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

/**
 * SETTINGS
 */
exports.appName = require('../../package.json').name;

/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

/**
 * Main paths of our project
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp'
};

/**
 * Implementation for formatting the date in the minified banners
 */
exports.getDate = function() {
  var date = new Date();

  return '/*! ' + require('../../package.json').name + ' ' + date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear() + ' */\n';
};

/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var $ = require('gulp-load-plugins')();


gulp.task('dev', ['connect', 'watch']);

gulp.task('watch', function() {
  $.watch(conf.paths.src + '/**/*.styl', function() {
    gulp.start('stylusLint');
  });

  $.watch(conf.paths.src + '/**/*.js', function() {
    gulp.start('jsLint');
  });
});

gulp.task('connect', function() {
  $.connect.server({
    root: './',
    port: 1987,
    livereload: true
                   });
});


/**
 * Created by lucien on 2016-01-25.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var stylish = require('gulp-jscs-stylish');
var $ = require('gulp-load-plugins')();

gulp.task('lint', ['jsLint', 'stylusLint']);

gulp.task('jsLint', function() {
  return gulp
      .src(conf.paths.src + '/**/*.js')
      .pipe($.jshint())
      .pipe($.jscs())
      .pipe(stylish.combineWithHintResults())
      .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('stylusLint', function() {
  return gulp
      .src(conf.paths.src + '/**/*.styl')
      .pipe($.stylint({
        config: '.stylintrc',
        reporter: {
          reporter: 'stylint-stylish',
          reporterOptions: {
            verbose: true
          }
        }
                      }))
      .pipe($.stylint.reporter());
});

/**
 * Created by lucien on 2016-01-26.
 */
'use strict';

var gulp = require('gulp');
var conf = require('./gulp.conf');
var $ = require('gulp-load-plugins')();

gulp.task('test', ['run-test']);

gulp.task('run-test', function() {

});
