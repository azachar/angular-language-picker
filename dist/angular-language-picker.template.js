(function(module) {
try {
  module = angular.module('templates-languagePicker');
} catch (e) {
  module = angular.module('templates-languagePicker', []);
}
module.run(['$templateCache', function($templateCache) {
'use strict';
$templateCache.put('language-picker-button.tpl.html',
        '<i ng-if=ikon class={{ikon}}>&nbsp;</i><ng-transclude></ng-transclude>');
$templateCache.put('language-picker-dialog.tpl.html',
        '<div class=modal-content><div class=modal-header><button ng-click=close() class=close><span class="fa fa-times"></span><span class=sr-only>Close</span></button><h3 class=modal-title><i class={{ikon}}></i> Choose a language</h3></div><div class=modal-body><div ng-show="languages.length &gt; limitMin" class=form-group><input type=search ng-model=search placeholder="Search languages..." class="form-control"><h4>We are available in {{languages.length}} languages</h4></div><div class=row><div ng-show=empty class="col-xs-6 col-sm-4 col-lg-4"><a ng-click=selectedLanguage(undefined) class=language><span ng-if=flags><i class="fa fa-language"></i>&nbsp;</span><span>Any language</span></a></div><div ng-repeat="lang in languages | filter:search | limitTo: limitMax" class="col-xs-6 col-sm-4 col-lg-4"><a ng-click=selectedLanguage(lang) class=language><span ng-if=flags><span class="flag-icon flag-icon-{{lang.country}}"></span>&nbsp;</span><span>{{lang.nativeName}}</span></a></div><div ng-if="languages.length - limitMax &gt; 0" class="col-xs-6 col-sm-4 col-lg-4">+ {{languages.length - limitMax}} more</div></div><div ng-if=help><br><div class=row><div class=col-lg-12><div class="well text-center text-muted">Don\'t you see your language? Help us <a href={{help}}>translate</a> it!</div></div></div></div></div></div>');
}]);
})();
