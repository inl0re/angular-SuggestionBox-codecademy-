app.controller('PostController', [
  '$scope',
  '$routeParams',
  'suggestions',

  function($scope, $routeParams, suggestions) {

    $scope.post = suggestions.posts[$routeParams.postId];
    $scope.comments = $scope.post.comments;

    $scope.upVote = function(comment) {
      comment.upvotes += 1;
    };

    $scope.addComment = function() {
      // if input empty, don't submit
      if(!$scope.body || $scope.body === "") {
        return;
      }

      $scope.comments.push ({
        body: $scope.body,
        upvotes: 0
      });

      $scope.body = '';
    };
}]);
