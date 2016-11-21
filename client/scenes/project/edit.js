class ProjectEdit extends BlazeComponent {
  onCreated(){
    // this.dataProvider = Project.findOne(this.selector());
    this.autorun(() => {
      this.subscribe("projects",{_id:this.selector()},{});
    })
  }
  selector(){
    return FlowRouter.getParam("_id");
  }

  dataUpdate(){
    return Project.findOne(this.selector());
  }

  handleDelete(e){
    e.preventDefault();
    var project = {
      _id:FlowRouter.getParam("_id")
    };

    Meteor.call('projectDelete', project, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

      FlowRouter.go('/');
    });
  }
}
ProjectEdit.register('ProjectEdit');
