var assert = require('assert');

require('./templating').parse('./fixtures/block-file.ejs', function(err, tree) {
	if (err) throw err;

	assert.equal(tree[0].type, 'STATIC');
	assert.equal(tree[1].type, 'BLOCK_ANONYMOUS');
	assert.equal(tree[1].body[0].type, 'STATIC');
	assert.equal(tree[1].body.length, 1);
});
