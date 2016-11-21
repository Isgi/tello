Meteor.publishComposite('members', function(selector, options) {
    return {
        find: function() {
            // Find posts with selector and options passed from client
            return Member.find(selector, options);
        },
        children: [
          {
            find: function(members) {
              // Find comment relation (HAS MANY COMMENT)
              return Meteor.users.find({_id:members.userId},{});
            }
          },
          {
            find: function(members) {
              // Find comment relation (HAS MANY COMMENT)
              return Project.find({_id:members.projectId},{});
            }
          }
        ]
    }
});
