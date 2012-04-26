function ValidatorCtrl($scope) {
    $scope.feeds = [
            {desc: 'The verge RSS feed', uri: 'http://www.theverge.com/rss/full.xml'},
            {desc: 'An invalid RSS feed', uri: 'http://www.theverge.com/rss/full.xml2'}
    ];
    $scope.passed = 0;
    $scope.failed = 0;

    $scope.progressHidden = false;
    $scope.progressAmount = 40;

    $scope.validateAll = function() {
    };
}
