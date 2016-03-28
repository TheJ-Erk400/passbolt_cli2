/**
 * Passbolt Search Command
 *
 * @copyright (c) 2016-onwards Bolt Softwares pvt. ltd.
 * @licence AGPL-3.0 http://www.gnu.org/licenses/agpl-3.0.en.html
 */
"use strict";

var program = require('commander');
var GpgAuthController = require('./app/controllers/gpgAuthController.js');

/**
 * Index.js
 */
program
  .option('-u, --fingerprint <fingerprint>', 'The user key fingerprint to authenticate with')
  .option('-p, --passphrase <passphrase>', 'The key passphrase')
  .parse(process.argv);

var gpgAuth = new GpgAuthController(program, process.argv);
gpgAuth.login();