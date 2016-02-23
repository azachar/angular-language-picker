angular
  .module 'language-picker', ['templates-languagePicker', 'ui.bootstrap']
  .constant 'langMap', window.languageMappingList
  .directive 'languagePicker', ($uibModal, langMap) ->
    restrict: 'A'
    transclude: true
    scope:
      languages: '='
      callback: '&?onChange'
      model: '=?'
      empty: '@?'
      flags: '@?'
      icon: '@?'
      help: '@?'
      template: '@?'
    templateUrl: 'language-picker-button.tpl.html'
    link: (scope, element, attrs, ctrl) ->
      if angular.isDefined(scope.icon)
        if scope.icon is 'icon' then scope.ikon = 'fa fa-language' else \
        scope.ikon = scope.icon

      if angular.isDefined(scope.flags)
        if scope.flags is 'flag' then flags = true else flags = \
        Boolean(scope.flags)

      if angular.isDefined(scope.template) then modalTemplateUrl = \
      scope.template else modalTemplateUrl = 'language-picker-dialog.tpl.html'

      ###
        Gets the language code with dash
        i.e. en_US
      ###
      getLangCodeWithLowDash = (localeWithDash) ->
        splitLocale = localeWithDash.split('-')

        if splitLocale.length > 1
          locale = splitLocale[0].toLowerCase() + '_' +
          splitLocale[1].toUpperCase()
        else
          locale = splitLocale[0].toLowerCase()

        locale

      ###
        Gets the language country name
        i.e : us
      ###
      getCountry = (locale) ->
        splitLocale = locale.split('-')

        if splitLocale.length > 1
          return splitLocale[1].toLowerCase()

        locale

      ###
        Creates a language object with the language map
      ###
      createLanguageObj = (locale) ->
        language = langMap[locale] or
          nativeName: locale
          englishName: locale

        language.code = locale
        language.country = getCountry locale

        language.asLowDashCode = ->
          getLangCodeWithLowDash locale

        language

      ###
        UI boostrap modal interface
      ###
      scope.open = ->
        $uibModal.open
          templateUrl: modalTemplateUrl
          controller: ($scope, $uibModalInstance) ->
            $scope.close = $uibModalInstance.close
            $scope.limitMin = 4
            $scope.limitMax = 24
            $scope.flags = flags
            $scope.ikon = scope.ikon
            $scope.help = scope.help
            $scope.empty = scope.empty
            $scope.languages = scope.languages.map((locale) ->
              createLanguageObj locale
            )

            $scope.selectedLanguage = (language) ->
              if language then scope.model = language.code else scope.model = \
              undefined

              if angular.isDefined(scope.callback)
                scope.callback() language

              $uibModalInstance.close
              return

            return
        return

      ###
        Binds the modal behaviour to the click event
      ###
      element.bind 'click', scope.open
      return
