
/*****************************************************************************/
/* Contact: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Contact.events({
  'click button': function(event, template) {
    event.preventDefault();

    var contactNameKey = 'contactName';
    var contactEmailKey = 'contactEmail';
    var contactMessageKey = 'contactMessage';
    
    var contactNameValue = template.find('[name=' + contactNameKey + ']').value;
    var contactEmailValue = template.find('[name=' + contactEmailKey + ']').value;
    var contactMessagValue = template.find('[name=' + contactMessageKey + ']').value;   
    
    var contactFields = {};
    contactFields[contactNameKey] = contactNameValue;
    contactFields[contactEmailKey] = contactEmailValue;
    contactFields[contactMessageKey] = contactMessagValue;
    
    var contactContext = Schemas.ContactSchema.newContext();
    var isValid = contactContext.validate(contactFields);   
    
    var validationErrors = {};
    if(isValid) {
      Meteor.call('sendEmail', contactFields);
    }else{
      _.each(contactContext.invalidKeys(), function(item) {
        if(item && item.name){
          validationErrors[item.name] = contactContext.keyErrorMessage(item.name);
        }
      });
    }
    Session.set('contactErrors', validationErrors);
  }
});

Template.Contact.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  hasError: function(ident) {
    return !!Session.get('contactErrors')[ident] ? Session.get('contactErrors')[ident] : '';
    
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact.created = function () {
  Session.set('contactErrors', {});
};

Template.Contact.rendered = function () {
};

Template.Contact.destroyed = function () {
  Session.set('contactErrors', {});
};


