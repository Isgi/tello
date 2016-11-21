class TaskIndex extends BlazeComponent {
  onCreated(){
    this.dataProviderTask = CybermantraDataProvider(Task);
    // console.log(FlowRouter.getParam("_id"));
    const selector = {listId:FlowRouter.getParam("_id")};
    const options = {};

      //don't forget to subscribe your data
    this.subscribe('tasks', selector, options);
  }

  columnsTask(){
    return [
      {
        title: "Task", //custom thead.th title
        name: "name" //name of your collection field
      },
      {
        title: "Created", //custom thead.th title
        name: "createdAt", //name of your collection field
      },
      {
        title: "Action", //custom thead.th title
        template:"actionTemplateTask",
        // template: "anotherTemplate" //you can also call another template inside your table
      }
    ]
  }

}
TaskIndex.register('TaskIndex');
