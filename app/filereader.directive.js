angular.module("InvoiceParser").directive("onReadFile", ReadFile);

ReadFile.$inject = ["$parse"];

function ReadFile($parse) {
  return {
    restrict: "A",
    scope: false,
    link: function(scope, element, attrs) {
      var fn = $parse(attrs.onReadFile);

      element.on("change", function(onChangeEvent) {
        var file = (onChangeEvent.srcElement || onChangeEvent.target).files[0];
        var reader = new FileReader();
        if (file.type.indexOf("text/") >= 0) {
          reader.onload = function(onLoadEvent) {
            scope.$apply(function() {
              fn(scope, { $fileContent: onLoadEvent.target.result });
            });
          };

          reader.readAsText(file);
        }
      });
    }
  };
}
