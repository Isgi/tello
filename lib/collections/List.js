List = new Mongo.Collection('lists');

var schemas = new SimpleSchema({
    name: {
      type: String,
      label: "Name",
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
List.attachSchema(schemas);


Meteor.methods({
  listInsert: function(postAttributes) {

    check(postAttributes, {
      name: String,
      projectId:String,
    });

    var list = _.extend(postAttributes, {
      createdAt: new Date()
    });

    var listId = List.insert(list);

  },

  listUpdate: function(postAttributes) {
    // check(this.userId, String);
    check(postAttributes, {
      name: String,
      _id:String
    });

    List.update(postAttributes._id, {$set: {
    name: postAttributes.name,
  }});

  },
  //
  listDelete: function(postAttributes) {
    // check(this.userId, String);
    check(postAttributes, {
      _id:String
    });

    List.remove(postAttributes._id);

  }

});
