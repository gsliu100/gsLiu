var mydata = angular.module('mydata',[]);

mydata.factory('oriData',function(){
	return [
		{
			demoName:'html5-audio',
			indexDirectName:"html5-audio",
			imageName:"html5-audio.PNG"

		},
		{
			demoName:'wxtk',
			indexDirectName:"wxtk",
			imageName:"wxtk.PNG"
		},
		{
			demoName:'image-show-box',
			indexDirectName:"image-show-box",
			imageName:"image-show-box.PNG"
		},
		{
			demoName:'responsive-test',
			indexDirectName:"responsive-test",
			imageName:"responsive-test.PNG"
		}
	]
});