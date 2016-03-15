app.controller('HomeController', [
  '$scope',
  'suggestions',

  function($scope, suggestions) {
  $scope.posts = suggestions.posts;
  $scope.upVote = function(post) {
    post.upvotes += 1;
  };
  $scope.addPost = function() {
    // if input empty, don't submit
    if(!$scope.title || $scope.title === "") {
      return;
    }

    $scope.posts.push ({
      title: $scope.title,
      upvotes: 0,
      comments: []
    });

    $scope.title = '';
  };
}]);
