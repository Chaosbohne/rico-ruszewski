Meteor.startup(function() {
  var username = "postmaster@sandbox7340dd3670b34d3eb251bc1a5c60ae45.mailgun.org";
  var password = "ae1f07e25d4c983e53a5fc9163831469";
  var server = "smtp.mailgun.org";
  var port = "587"

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '@' + encodeURIComponent(server) + ':' + port;  
});