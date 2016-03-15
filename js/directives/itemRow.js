app.directive('itemRow', function() {
  return {
    restrict: 'A',
    scope: {
      expense: '=',
      editItem : '&'
    },
    templateUrl: 'js/directives/itemRow.html',

  };
});
