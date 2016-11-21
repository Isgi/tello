class TaskView extends BlazeComponent {
  onCreated(){
    this.dataProviderTask = CybermantraDataProvider(Task);
    // console.log(FlowRouter.getParam("_id"));
    const selector = this._id();
    const options = {};

      //don't forget to subscribe your data
    this.subscribe('tasks', selector, options);
  }

  _id(){
    return FlowRouter.getParam("_id");
  }
  columnsTask(){
    return [
      {
        title: "Task Name", //custom thead.th title
        name: "name" //name of your collection field
      },
      {
        title: "Created", //custom thead.th title
        name: "createdAt", //name of your collection field
      }

    ]
  }
}
TaskView.register('TaskView');
