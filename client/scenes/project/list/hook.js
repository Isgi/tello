const dataProvider = CybermantraDataProvider();

AutoForm.addHooks(['insertList','updateList'],{
  before: {
    insert: function(doc) {
      const list = {
        name : doc.name,
        projectId : FlowRouter.getParam("_id")
      }
      this.result(list);
    }
  },
  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    if (formType == "update") {
      const list = List.findOne(FlowRouter.getParam("_id"))
      dataProvider.selector.set({projectId: list.projectId});
    }
    else
      dataProvider.selector.set({projectId: FlowRouter.getParam("_id")});

    Meteoris.Flash.set('success', 'Data Successs');
    return FlowRouter.go('/project/'+dataProvider.selector.get().projectId);
  }
});
