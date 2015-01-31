var workspaceUrl = "https://githackathon-timjrobinson.c9.io/";
var bridgeIp = "10.10.30.57";

var socket = require('socket.io-client')(workspaceUrl);
var http = require("http");
var request = require("request");
var path = require("path");

socket.on('connect', function(){
	console.log("Connected");	
});
socket.on('disconnect', function(){
	console.log("disconnected");
});
socket.on('data', function(data) {
	console.log("Received request: ", data);
	var postData = {url: "http://" + bridgeIp + data.path, method: data.method, json: data.body ? JSON.parse(data.body) : ""}
	console.log("Sending data: ", postData);
	request(postData, function (err, res, body) {
		console.log("Got data: ", body);
	});
});



