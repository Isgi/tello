class ListEdit extends BlazeComponent {
  onCreated(){
    this.autorun(()=>{
        this.subscribe('lists',{_id:this.selector()}, {});
    });
  }

  selector(){
    return FlowRouter.getParam("_id");
  }

  dataUpdate(){
    return List.findOne(this.selector());
  }

  handleDelete(e){
    e.preventDefault();
    const dataProvider = this.dataUpdate();
    var list = {
      _id:dataProvider._id
    };

    Meteor.call('listDelete', list, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

      FlowRouter.go('/project/'+dataProvider.projectId);
    });
  }

}
ListEdit.register('ListEdit');
