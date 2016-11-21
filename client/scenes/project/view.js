class ProjectView extends BlazeComponent {
  onCreated(){
    this.dataProviderProject = CybermantraDataProvider(Project);
    // console.log(FlowRouter.getParam("_id"));
    const selector = this._id();
    const options = {};

      //don't forget to subscribe your data
    this.subscribe('projects', selector, options);
  }

  _id(){
    return FlowRouter.getParam("_id");
  }
  columnsProject(){
    return [
      {
        title: "Project Name", //custom thead.th title
        name: "name" //name of your collection field
      },
      {
        title: "Created", //custom thead.th title
        name: "createdAt", //name of your collection field
      }

    ]
  }
}
ProjectView.register('ProjectView');
