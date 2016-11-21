//project
FlowRouter.route('/project', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"ProjectIndex"});
    }
});

FlowRouter.route('/project/insert', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"ProjectAdd"});
    }
});

FlowRouter.route('/project/:_id', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"ProjectView"});
    }
});

FlowRouter.route('/project/update/:_id', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"ProjectEdit"});
    }
});



  //list
  FlowRouter.route('/list/insert/:_id', {
      action: function() {
          BlazeLayout.render('meteoris_themeAdminMain', {content:"ListAdd"});
      }
  });

  FlowRouter.route('/list/:_id', {
      action: function() {
          BlazeLayout.render('meteoris_themeAdminMain', {content:"ListView"});
      }
  });

  FlowRouter.route('/list/update/:_id', {
      action: function() {
          BlazeLayout.render('meteoris_themeAdminMain', {content:"ListEdit"});
      }
  });


    //Task
    FlowRouter.route('/task/insert/:_id', {
        action: function() {
            BlazeLayout.render('meteoris_themeAdminMain', {content:"TaskAdd"});
        }
    });

    FlowRouter.route('/task/:_id', {
        action: function() {
            BlazeLayout.render('meteoris_themeAdminMain', {content:"TaskView"});
        }
    });

    FlowRouter.route('/task/update/:_id', {
        action: function() {
            BlazeLayout.render('meteoris_themeAdminMain', {content:"TaskEdit"});
        }
    });


//member
FlowRouter.route('/member/:_id', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"MemberIndex"});
    }
});

FlowRouter.route('/member/insert/:_id', {
    action: function() {
        BlazeLayout.render('meteoris_themeAdminMain', {content:"MemberAdd"});
    }
});

FlowRouter.notFound = {

    action: function() {
      BlazeLayout.render('meteoris_themeAdminMain', {content:"accessDenied"});
    }
};
