// var ruri = {
// 	printfirstName : function(){
// 		console.log(this === ruri);
// 		console.log('My name is Ruri');
// 	}
// };
// ruri.printfirstName();

// //The default calling contentext global
// function doSmoethingWorthless(){
// 	console.log('\n I am worthless');
// 	console.log(this === global);
// }
// doSmoethingWorthless();
var movies = require('./index');
movies.printAvatar();
movies.printsimiliar();
console.log(movies.favMovies);
