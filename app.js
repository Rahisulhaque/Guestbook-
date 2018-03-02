/*****************************************************************************************************************/
/*                                                                                                               */
/*                                My express project                                                             */
/*                                  -Rahisul Haque                                                               */
/*                                                                                                               */
/*****************************************************************************************************************/

var express 	=	require('express');
var http		=	require('http');
var path 		=	require('path');
var logger		=	require('morgan');
var bodyParser =	require("body-parser")

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var entries = [];
app.app.locals.entries = entries;

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extened : false}));


app.use((request , response)=>{
	console.log("In come s a request to : " + request.url);
	response.end("Hello World!");

});

app.get('/', (request, response) =>{
	response.render("index");
});


app.get("/new-entry",(request, response)=>{
	response.render("new-entry");
});

app.post("new-entries", (require, response)=>{
	if (!request.body.title || !request.body.body){
		response.status(400).send("Entries must have a title and a body!");
		return;
	}
	entries.push({
		title: request.body.title,
		constent :request.body.body,
		published: new date()
	});
	response.res.redirect("/")
})

http.createServer(app).listen(3001, ()=>{
	console.log('Guestbook is running on port 3001');
});
