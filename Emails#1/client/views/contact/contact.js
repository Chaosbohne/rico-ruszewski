
/*****************************************************************************/
/* Contact: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Contact.events({
  'click button': function(event, template) {
    event.preventDefault();
    var contactNameValue = template.find('[name=contactName]').value;
    var contactEmailValue = template.find('[name=contactEmail]').value;
    var contactMessagValue = template.find('[name=contactMessage]').value;   
    
    Meteor.call('sendEmail', contactNameValue, contactEmailValue, contactMessagValue, function(error) {
    });
  }
});

Template.Contact.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact.created = function () {
};

Template.Contact.rendered = function () {
};

Template.Contact.destroyed = function () {
};


