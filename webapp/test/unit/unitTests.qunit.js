/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"student402comsaptrainingux402listdetail/ux402_listdetail/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});