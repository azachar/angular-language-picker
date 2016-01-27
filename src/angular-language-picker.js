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