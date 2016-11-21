class ProjectIndex extends BlazeComponent {
  onCreated(){
    this.dataProvider = CybermantraDataProvider(Project);
    this.autorun(()=>{
        this.subscribe('projects',{}, {});
    });
    // console.log(this.dataProvider);
  }

  columns(){
    return [
      {
        title: "Name", //custom thead.th title
        name: "name" //name of your collection field
      },
      {
        title: "Created", //custom thead.th title
        name: "createdAt", //name of your collection
      },
      {
        title: "Action", //custom thead.th title
        template:"actionTemplateProject",
        // template: "anotherTemplate" //you can also call another template inside your table
      }
    ]
  }

  gridViewOptions(){
    return {
      tableClass: 'table-striped'
    }
  }

}
ProjectIndex.register('ProjectIndex');
