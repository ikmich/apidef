"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_endpoints_1 = require("../lib/get-endpoints");
function dlEndpointsRequestHandler(req, res) {
    var endpoints = get_endpoints_1.getEndpoints(req.app);
    var json = JSON.stringify(endpoints, null, 2);
    var filename = 'apidef-endpoints.json';
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', "attachment; filename=" + filename);
    res.send(Buffer.from(json));
}
exports.default = dlEndpointsRequestHandler;
