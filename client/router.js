if (Meteor.isClient) {


FlowRouter.route('/', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "portal" });
  }
});

FlowRouter.route('/home', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "home" });
  }
});

FlowRouter.route('/contact', {
  action: function(){

    BlazeLayout.render('layout1', { top: "navigation", main: "contact" });
  }
});

FlowRouter.route('/oldsite', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "freelance" });
  }
});


FlowRouter.route('/about-me', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "about-me" });
  }
});

FlowRouter.route('/projects-desktop', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "projectsDesktop" });
  }
});

FlowRouter.route('/projects-bruinmobile', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "projectsBruinmobile" });
  }
});

FlowRouter.route('/projects-morningsignout', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "projectsMorningsignout" });
  }
});

FlowRouter.route('/oldhome', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "oldhome" });
  }
});

FlowRouter.route('/oldcontact', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "oldcontact" });
  }
});

FlowRouter.route('/submitted', {
  action: function(){

    BlazeLayout.render('layout2', { top: "oldnavigation", main: "submitted" });
  }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {

    }
};
}
