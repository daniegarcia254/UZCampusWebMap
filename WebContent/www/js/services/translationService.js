UZCampusWebMapApp.service('translationService', function($resource) {

    this.getTranslation = function($scope, language) {

        var languageFilePath = 'translations/translation_' + language + '.json';
        console.log(languageFilePath);

        $resource(languageFilePath).get(function (data) {
            $scope.translation = data;
        });
    };
});