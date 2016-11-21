Meteor.publishComposite('lists', function(selector, options) {
    return {
        find: function() {
            // Find posts with selector and options passed from client
            return List.find(selector, options);
        },
    }
});
