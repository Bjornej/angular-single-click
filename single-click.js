angular.module("ng").directive("ngSingleClick", ["$parse", function ($parse) {
    return {
        restrict: "A",
        controller: ['$scope', function ($scope) {
            this.running = false;
        }],
        compile: function ($element, attr) {
            var fn = $parse(attr.ngSingleClick);
            return function (scope, element, attr, controller) {
                element.on("click", function (event) {
                    debugger;
                    if (!controller.running) {
                        scope.$apply(function () {
                            var result = fn(scope, { $event: event });
                            if(result.finally!==undefined){
                                controller.running=true;
                                result.finally(function(){
                                    controller.running=false;
                                });
                            }
                        });
                    }
                });
            };
        }
    };
} ]);