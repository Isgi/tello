Project = new Mongo.Collection('projects');

var schemas = new SimpleSchema({
    name: {
      type: String,
      label: "Name",
    },
    createdBy: {
        type: String,
        autoValue: function () {
            if (this.isInsert && !this.value)
                return this.userId;
        },
        denyUpdate: true,
        optional: true,
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
Project.attachSchema(schemas);


Meteor.methods({
  projectInsert: function(postAttributes) {

    check(postAttributes, {
      name: String
    });

    var user = Meteor.user();
    var project = _.extend(postAttributes, {
      createdBy: user._id,
      createdAt: new Date()
    });

    var projectId = Project.insert(project);

  },

  projectUpdate: function(postAttributes) {
    // check(this.userId, String);
    check(postAttributes, {
      name: String,
      _id:String
    });

    Project.update(postAttributes._id, {$set: {
    name: postAttributes.name,
  }});

  },

  projectDelete: function(postAttributes) {
    // check(this.userId, String);
    check(postAttributes, {
      _id:String
    });

    Project.remove(postAttributes._id);

  }

});
