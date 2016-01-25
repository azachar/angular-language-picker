'use strict';

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
          link: function(scope, element, attrs, ctrl) {

            if (angular.isDefined(scope.icon)) {
              scope.ikon = scope.icon === 'icon' ? 'fa fa-language' : scope.icon;
            }

            var flags;
            if (angular.isDefined(scope.flags)) {
              flags = scope.flags === 'flags' ? true : Boolean(scope.flags);
            }

            var modalTemplateUrl = 'language-picker-dialog.tpl.html';
            if (angular.isDefined(scope.template)) {
              modalTemplateUrl = scope.template;
            }

            function getLangCodeWithLowDash(locale) {
              var splitLocale = locale.split('-');

              return splitLocale.length > 1 ?
                     (splitLocale[0].toLowerCase() + '_' + splitLocale[1].toUpperCase()) :
                     splitLocale[0].toLowerCase();
            }

            function getCountry(locale) {
              var splitLocale = locale.split('-');

              return splitLocale.length > 1 ? splitLocale[1].toLowerCase() : locale;
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
                    scope.model = language ? language.code : undefined;

                    if (angular.isDefined(scope.callback)) {
                      scope.callback()(language);
                    }

                    $uibModalInstance.close();
                  };
                }]
              });
            };

            element.bind('click', scope.open);
          }
        };
      }
    ]);
}(this, this.angular));
