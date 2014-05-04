angular.module("ng").directive("ngSingleClick", ["$parse", function ($parse) {
    "use strict";
    return {
        restrict: "A",
        controller: ['$scope', function ($scope) {
            // indicates if function invoked by the click is currently running
            this.running = false;
        }],
        compile: function ($element, attr) {
            var fn = $parse(attr.ngSingleClick);
            return function (scope, element, attr, controller) {
                element.on("click", function (event) {

                    // if function is currently running don't execute it again
                    if (!controller.running) {
                        scope.$apply(function () {

                            // if invoked function returns a promise wait for it's completion
                            var result = fn(scope, { $event: event });
                            if (result.finally !== undefined) {
                                controller.running = true;
                                result.finally(function () {
                                    controller.running = false;
                                });
                            }
                        });
                    }
                });
            };
        }
    };
}]);