Meteor.publishComposite('projects', function(selector, options) {
    return {
        find: function() {
            // Find posts with selector and options passed from client
            return Project.find(selector, options);
        },

    }
});
