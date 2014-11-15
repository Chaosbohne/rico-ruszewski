Meteor.methods({
  'sendEmail': function (contactFields) {
    if(contactFields) {
      var contactContext = Schemas.ContactSchema.newContext();
      var isValid = contactContext.validate(contactFields);      

      if(isValid) {
        this.unblock();

        Email.send({
          to: "blog@trash-mail.com", //Receiver
          from: contactFields.contactEmail, //Sender
          subject: 'Email from ' + contactFields.contactEmail, //Subject
          text: contactFields.contactMessage //Message
        });          
      }
    }
  }
});