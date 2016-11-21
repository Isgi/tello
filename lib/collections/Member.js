Member = new Mongo.Collection('members');

var schemas = new SimpleSchema({

    userId: {
      type: String,
      label: "Project",
    },
    projectId: {
      type: String,
      label: "Project",
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            if (this.isInsert)
                return new Date;
        },
        denyUpdate: true,
        optional: true,
    }
});
//attach the schema to collection
Member.attachSchema(schemas);

Meteor.methods({
  memberInsert: function(postAttributes) {

    check(postAttributes, {
      userId: String,
      projectId:String,
    });

    var member = _.extend(postAttributes, {
      createdAt: new Date()
    });

    var memberId = Member.insert(member);

  },

  memberDelete: function(postAttributes) {
    // check(this.userId, String);
    check(postAttributes, {
      _id:String
    });

    Member.remove(postAttributes._id);

  }

});
