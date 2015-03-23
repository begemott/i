'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
	DOMAIN: 'http://localhost:9000',
	SESSION_SECRET: 'portaldniprorada-secret',

	// Control debug level for modules using visionmedia/debug
	DEBUG: '',

	//activiti settings
	ACTIVITI_PROT: 'https',
	ACTIVITI_HOST: 'localhost',
	ACTIVITI_PORT: 8081,
	ACTIVITI_REST: 'activiti-rest/service',
	ACTIVITI_AUTH_BASIC: 'Basic a2VybWl0Omtlcm1pdA==',

	BANK_ID_HOST: "localhost",
	BANK_ID_PATH: "path/tobankidservice",
	BANK_ID_APP_ID: "myApp",

	PRIVATE_KEY: 'path to sslcert/server.key',
	CERTIFICATE: 'sslcert/server.crt',
	SSL_PORT: 8084
	
};