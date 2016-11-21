AutoForm.addHooks(['insertProject','updateProject'],{
  onSuccess: function(formType, result) {
    console.log(formType);
    console.log(result);
    Meteoris.Flash.set('success', 'Data Successfully');
    return FlowRouter.go('/');
  },
});
