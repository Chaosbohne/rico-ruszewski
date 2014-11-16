
Schemas.ContactSchema = new SimpleSchema({
  contactName: {
    type: String,
    max: 100,
    min: 3
  }, 
  contactEmail: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  contactMessage: {
    type: String,    
    max: 10000,
    min: 10
  }
});
