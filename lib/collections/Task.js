Task = new Mongo.Collection('tasks');

var schemas = new SimpleSchema({
    name: {
      type: String,
      label: "Name",
    },
    listId: {
      type: String,
      label: "List",
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
Task.attachSchema(schemas);


Meteor.methods({
  taskInsert: function(postAttributes) {
    // console.log(postAttributes);
    check(postAttributes, {
      name: String,
      listId:String,
    });

    var task = _.extend(postAttributes, {
      createdAt: new Date()
    });

    var taskId = Task.insert(task);

  },

  taskUpdate: function(postAttributes) {
    // check(this.userId, String);
    check(postAttributes, {
      name: String,
      _id:String
    });

    Task.update(postAttributes._id, {$set: {
    name: postAttributes.name,
  }});

  },
  //
  taskDelete: function(postAttributes) {
    // check(this.userId, String);
    check(postAttributes, {
      _id:String
    });

    Task.remove(postAttributes._id);

  }

});
