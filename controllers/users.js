module.exports = function(models) {
	return {
		postUsers: function(req, res, next) {
		  models.User.create({
		    name: req.body.name,
		    email: req.body.email,
		    userlevel: 0,
		    password: req.body.password
		  }).then(function(user) {
		    res.json({
		      message: 'User \'' + user.name + '\' (' + user.email + ') added!'
		    });
		  }).catch(function(err) {
		    next(err);
		  });
		},
		
		// TODO: remove after development!!!
		getUsers: function(req, res, next) {
		  models.User.findAll().then(function(users) {
		    res.json(users);
		  }).catch(function(err) {
		    next(err);
		  });
		}
	};
}