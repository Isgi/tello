Meteor.publishComposite('users', function(selector, options) {
    return {
        find: function() {
            // Find posts with selector and options passed from client
            return Meteor.users.find(selector, options);
        },
    }
});
