class ActionTemplateMember extends BlazeComponent {
  handleDelete(e){
    e.preventDefault();
    var id_member = $(e.target).find('[name=delete_member]').context.value;

    var member = {
      _id:id_member
    };

    Meteor.call('memberDelete', member, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);

      FlowRouter.go('/member/'+FlowRouter.getParam("_id"));
    });
  }
}
ActionTemplateMember.register("actionTemplateMember");
