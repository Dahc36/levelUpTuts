angular
	.module('directoryApp', ['ngAnimate'])
	.controller('directoryController', function(){
		var dirList = this;

		dirList.list = [
			{name: 'Scott', age: 29, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg'},
			{name: 'Ross', age: 31, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg'},
			{name: 'Ben', age: 32, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg'},
			{name: 'Courtney', age: 29, img: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'}
		];

		dirList.addPerson = function(){
			dirList.list.push({
				name:dirList.name,
				age: dirList.age
			});
			dirList.name = null;
			dirList.age = null;
		};

	});