class ListIndex extends BlazeComponent {
  onCreated(){
    this.dataProviderList = CybermantraDataProvider(List);
    // console.log(FlowRouter.getParam("_id"));
    const selector = {projectId:FlowRouter.getParam("_id")};
    const options = {};

      //don't forget to subscribe your data
    this.subscribe('lists', selector, options);
  }

  columnsList(){
    return [
      {
        title: "List", //custom thead.th title
        name: "name" //name of your collection field
      },
      {
        title: "Created", //custom thead.th title
        name: "createdAt", //name of your collection field
      },
      {
        title: "Action", //custom thead.th title
        template:"actionTemplateList",
        // template: "anotherTemplate" //you can also call another template inside your table
      }
    ]
  }

}
ListIndex.register('ListIndex');
