var assert = require('assert');

require('pejs')(__dirname+'/fixtures/block-declare.ejs', function(err, render) {
	if (err) throw err;

	assert.equal(render().replace(/\s+/g, ' ').trim(), 'foo bar');
});
