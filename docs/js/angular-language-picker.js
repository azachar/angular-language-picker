/**
 * @name angular-language-picker
 * @version v0.0.1
 * @author  
 * @license MIT
 */
(function(window, angular){

function common() {
    console.log('It\'s common!');
}


/**
 * @ngdoc directive
 * @name myApp.directive:myDirective
 * @restrict 'A'
 * 
 * @description
 * My Directive!
 * 
 */
 function myDirective() {
     var directiveDefinitionObject = {
        strict: 'A',
        require: '^ngModel',
        link: function(scope, el, attr, ngModelCtrl) {
            scope.click = function() {
                ngModelCtrl.$setViewValue('It\' my button!!!');
            };
        }
     };
     
     return directiveDefinitionObject;
 }


function myFilter(){
    return function(input) {
        return 'my value';
    };
}


/**
 * @ngdoc service
 * @name myApp.myConstant
 * 
 * @description
 * This constant is not yours but mine!!
 */
var myConstant = 'It\'s also my constant.';


/**
 * @ngdoc service
 * @name myApp.myFactory
 * 
 * @description
 * It's not not not not not not not not my service.
 *
 */
function myFactory() {
    var myBox = [];
    
    function pushIntoMyBox(value){
        myBox.push(value);
    }
    
    return {
        push: pushIntoMyBox
    };
}


/**
 * @ngdoc object
 * 
 * @name myApp.myProvider
 * @requires myApp.myConstant
 * 
 * @description
 * Hmmmmy provider.
 */
function myProvider() {
    var maxBoxSize = 100;
    var box = [];
    
    this.setMaxBoxSize = function(size) {
        maxBoxSize = size;
    };
    
    this.$get = function() {
        
        function pushIntoMyBox(value) {
           if(box.length < maxBoxSize) {
               box.push(value);
           } 
        }
        
        return {
            push: pushIntoMyBox
        };
    };
}


/**
 * @ngdoc service
 * 
 * @name myApp.myService
 * 
 * @description
 * Surprisingly, it's my service.
 */
function myService() {
    var box = [];
    
    this.pushIntoMyBox = function(value) {
        box.push(value);
    };
}


var app = angular.module('ngLanguagePicker', [])
.provider('myProvider', myProvider)         // declared in service/provider.js
.service('myService', myService)            // declared in service/service.js
.constant('myConstant', myConstant)         // declared in service/constant.js
.factory('myFactory', myFactory)            // declared in service/factory.js
.directive('myDirective', myDirective)      // declared in directive/directive.js
.filter('myFilter', myFilter);              // declared in filter/filter.js


angular.module("ngLanguagePicker").run(["$templateCache", function($templateCache) {$templateCache.put("template.html","<div> <h1> This is my temlpate! </h1> Descriptions for template. </div>");}]);

})(window, window.angular);