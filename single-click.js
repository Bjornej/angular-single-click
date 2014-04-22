app.directive("ngSingleClick",function(){
	return {
		restrict : "A",
        compile: function($element, attr) {
          var fn = $parse(attr.ngSingleClick);
          return function(scope, element, attr) {
            element.on("click", function(event) {
              scope.$apply(function() {
                fn(scope, {$event:event});
              });
            });
          };
		}
	};
});