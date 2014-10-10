var phantomcss = require('node_modules/phantomcss/phantomcss.js');
phantomcss.init();

casper.start('index.html');

casper.then(function() {
  phantomcss.screenshot('#mycanvas', 'default_is_red');
});

casper.then(function() {
  casper.click('#radio-green');
  phantomcss.screenshot('#mycanvas', 'change_to_green');
});

casper.then(function() {
  casper.click('#radio-blue');
  phantomcss.screenshot('#mycanvas', 'change_to_blue');
});

casper.then(function() {
  casper.click('#radio-red');
  phantomcss.screenshot('#mycanvas', 'change_to_red');
});

casper.then(function now_check_the_screenshots() {
	phantomcss.compareAll();
});

casper.then(function end_it() {
	casper.test.done();
});

casper.run(function() {
	phantom.exit(phantomcss.getExitStatus());
});
