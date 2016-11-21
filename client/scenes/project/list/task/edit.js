class TaskEdit extends BlazeComponent {
  onCreated(){
    this.autorun(()=>{
        this.subscribe('tasks',{_id:this.selector()}, {});
    });
  }

  selector(){
    return FlowRouter.getParam("_id");
  }

  dataUpdate(){
    return Task.findOne(this.selector());
  }

  handleDelete(e){
    e.preventDefault();
    const dataProvider = this.dataUpdate();
    var task = {
      _id:dataProvider._id
    };

    Meteor.call('taskDelete', task, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

      FlowRouter.go('/list/'+dataProvider.listId);
    });
  }

}
TaskEdit.register('TaskEdit');
