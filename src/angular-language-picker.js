(function (window, angular) {
    'use strict';

    angular
        .module('language-picker', ['templates-languagePicker', 'ui.bootstrap'])

        .constant('langMap', window.languageMappingList)

        .directive('languagePicker', languagePicker)
    ;

    languagePicker.$inject = ['$uibModal', 'langMap'];
    function languagePicker ($uibModal, langMap) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'AE',
            transclude: true,
            replace: true,
            templateUrl: 'language-picker-button.tpl.html',
            scope: {
                languages: '=',
                callback: '&onChange',
                flags: '@?',
                icon: '@?',
                help: '@?',
                template: '@?'
            }
        };
        return directive;

        function link(scope, element, attrs) {


            scope.ikon = 'fa fa-language';
            if (angular.isDefined(scope.icon)) {
                scope.ikon = scope.icon;
            }

            var flags = true;
            if (angular.isDefined(scope.flags)) {
                flags = scope.flags;
            }

            var modalTemplateUrl = 'language-picker-dialog.tpl.html';
            if (angular.isDefined(scope.template)) {
                modalTemplateUrl = scope.template;
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
                        $scope.languages = scope.languages.map(function(locale) {
                            return createLanguageObj(locale);
                        });

                        $scope.onLanguageChange = function(language) {
                            scope.callback(language);
                            $uibModalInstance.close();
                        };
                    }]
                });
            };

            function getLangCodeWithLowDash (locale) {
                var splitLocale = locale.split('-');
                var locale = 'en_US';

                if (splitLocale.length > 1) {
                    locale = (splitLocale[0].toLowerCase() + '_' + splitLocale[1].toUpperCase());
                } else {
                    locale = splitLocale[0].toLowerCase();
                }

                return locale;
            }

            function getCountry (locale) {
                var splitLocale = locale.split('-');

                if (splitLocale.length > 1) {
                    return splitLocale[1].toLowerCase();
                }

                return locale;
            }

            function createLanguageObj (locale) {
                var language = langMap[locale] || {
                    nativeName: locale,
                    englishName: locale
                };
                language.code = locale;
                language.country = getCountry(locale);
                language.asLowDashCode = function() {
                    return getLangCodeWithLowDash(locale);
                }
                return language;
            }
        }
    }
})(this, this.angular);