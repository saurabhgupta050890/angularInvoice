angular.module("InvoiceParser", []).controller("AppCtrl", AppCtrl);

AppCtrl.$inject = ["$scope", "ParcerService"];

function AppCtrl($scope, ParcerService) {
  $scope.fileName = "";
  $scope.onFileSelect = function($fileContent, fileName) {
    $scope.invoice = $fileContent;
    $scope.fileName = fileName;
    var nums = $fileContent.split("\n\n");
    var parsedNums = [];
    nums.forEach(number => {
      if (number) {
        parsedNums.push(ParcerService.parseSevenSegmentASCII(number));
      }
    });
    $scope.parsed = parsedNums.join("\n");
  };
}
