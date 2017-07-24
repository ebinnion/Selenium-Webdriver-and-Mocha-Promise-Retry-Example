var webdriver = require( 'selenium-webdriver' ),
	test = require( 'selenium-webdriver/testing' ),
	chrome = require( 'selenium-webdriver/chrome' );

var browser;

var handleRetries = function ( browser, fetchPromise, numRetries ) {
	numRetries = 'undefined' === typeof numRetries
		? 1
		: numRetries;

	return fetchPromise().catch( function( err ) {
		if ( numRetries > 0 ) {
			return handleRetries( browser, fetchPromise, numRetries - 1 );
		}
		throw err;
	} );
};

test.before( function() {
	this.timeout( 50000 );

	browser = new webdriver
		.Builder()
		.usingServer()
		.withCapabilities( {
			'browserName': 'chrome' 
		} )
		.build();
} );

test.after( function() {
	browser.quit();
} )

test.describe( 'Can fetch URL', function() {
	test.it( 'page contains something', function() {
		var selector = webdriver.By.name( 'ebinnion' ),
			i = 1;
		
		return handleRetries( browser, function() {
			console.log( 'Trying: ' + i++ );
			browser.get( 'https://google.com' );
			return browser.findElement( selector );
		}, 3 );
	} );
} );