const dataProvider = CybermantraDataProvider();
AutoForm.addHooks(['insertTask','updateTask'],{
  before: {
    insert: function(doc) {
      const task = {
        name : doc.name,
        listId : FlowRouter.getParam("_id")
      }
      this.result(task);
    }
  },
  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    if (formType == "update") {
      const task = Task.findOne(FlowRouter.getParam("_id"))
      dataProvider.selector.set({listId: task.listId});
    }
    else
      dataProvider.selector.set({listId: FlowRouter.getParam("_id")});

    Meteoris.Flash.set('success', 'Data Successs');
    return FlowRouter.go('/list/'+dataProvider.selector.get().listId);
  }
});
