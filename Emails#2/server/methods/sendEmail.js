Meteor.methods({
  'sendEmail': function (contactFields) {     
    check(contactFields, Schemas.ContactSchema);

    this.unblock();

    Email.send({
      to: "blog@trash-mail.com", //Receiver
      from: contactFields.contactEmail, //Sender
      subject: 'Email from ' + contactFields.contactEmail, //Subject
      text: contactFields.contactMessage //Message
    });          
  }
});