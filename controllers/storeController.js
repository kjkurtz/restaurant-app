exports.myMiddleware = (req, res, next) => {
	req.name = 'Kyle';
	if(req.name === 'Kyle') {
		throw Error('That is a stupid name');
	}
	next();
};

exports.homePage = (req, res) => {
	console.log(req.name);
	res.render('index');
}