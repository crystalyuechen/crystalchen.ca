import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.startup(function(){
  process.env.MAIL_URL="smtps://postmaster%40<mg.crystalchen.ca>.mailgun.org:babcd5af2e2acde2b419676df331b6f4@smtp.mailgun.org:465";
});

Meteor.methods({
  'sendEmail': function (to, from, subject, text) {
    this.unblock();

    Email.send({ to, from, subject, text });
  }
});
