class MemberAdd extends BlazeComponent {
  onCreated(){
    this.autorun(()=>{
        this.subscribe('users',{}, {});
    });
  }

  users(){
    return Meteor.users.find();
  }

  projectId(){
    return FlowRouter.getParam("_id");
  }

  handleSubmit(e){
    e.preventDefault();
    var member = {
      userId: $(e.target).find('[name=userId]').val(),
      projectId: this.projectId()
    };

    Meteor.call('memberInsert', member, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

      FlowRouter.go('/member/'+FlowRouter.getParam("_id"));
    });
  }
}
MemberAdd.register('MemberAdd');
