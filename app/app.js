angular.module('InvoiceParser', [])
    .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$scope', 'ParcerService'];

function AppCtrl($scope, ParcerService) {
    $scope.onFileSelect = function($fileContent) {
        $scope.invoice = $fileContent;

        var nums = $fileContent.split("\n\n");
        var parsedNums = [];
        console.log(nums.length);
        nums.forEach(function(number) {
            if(number) {
                parsedNums.push(ParcerService.parseSevenSegmentASCII(number));
            }
        });
        
        //console.log(parsedNums);
    }
}