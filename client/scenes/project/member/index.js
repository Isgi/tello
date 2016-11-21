class MemberIndex extends BlazeComponent {
  onCreated(){
    this.dataProvider = CybermantraDataProvider(Member);
    this.autorun(()=>{
        this.subscribe('members',{projectId:this.projectId()}, {});
    });
  }

  projectId(){
    return FlowRouter.getParam("_id");
  }

  user(userId){
    return Meteor.users.findOne(userId);
  }

  columns(){
    return [
      {
        title: "Name", //custom thead.th title
        name: "userId",
        value: (val) => {
          var prof = this.user(val);
          return prof.profile.name;
        }
      },
      {
        title: "Created", //custom thead.th title
        name: "createdAt", //name of your collection
      },
      {
        title: "Action", //custom thead.th title
        template : "actionTemplateMember",


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
MemberIndex.register('MemberIndex');
