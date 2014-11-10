Meteor.methods({
  'sendEmail': function (contactName, contactEmail, contactMessage) {
        this.unblock();

        Email.send({
          to: "blog@trash-mail.com", //Receiver
          from: contactEmail, //Sender
          subject: 'Email from ' + contactEmail, //Subject
          text: contactMessage //Message
        });              
  }
});