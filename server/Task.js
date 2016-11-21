Meteor.publishComposite('tasks', function(selector, options) {
    return {
        find: function() {
            // Find posts with selector and options passed from client
            return Task.find(selector, options);
        },
    }
});
