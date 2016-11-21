class ListView extends BlazeComponent {
  onCreated(){
    this.dataProviderList = CybermantraDataProvider(List);
    // console.log(FlowRouter.getParam("_id"));
    const selector = this._id();
    const options = {};

      //don't forget to subscribe your data
    this.subscribe('lists', selector, options);
  }

  _id(){
    return FlowRouter.getParam("_id");
  }
  columnsList(){
    return [
      {
        title: "List Name", //custom thead.th title
        name: "name" //name of your collection field
      },
      {
        title: "Created", //custom thead.th title
        name: "createdAt", //name of your collection field
      }

    ]
  }
}
ListView.register('ListView');
