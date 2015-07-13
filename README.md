# Learning the Flux architecture
Starting with the boilerplate at http://github.com/justinrassier/gulp-browserify-react-boilerplate, this was an attempt to understand the Flux architecture without dependeing on everything that Facebook has to start out with.



```ShellSession
npm install -g gulp
npm install
```

## For building


```ShellSession
gulp
```
Default gulp will lint the source, run browserify with a react transform for JSX compilation then perform a watch on source.

##Running Server
The project contains a node server component as well. Run;
```ShellSession
node server
```
This will start up an express instance on port 8080. Navigate to http://localhost:8080 to hit index.html

####Handy Trick
```ShellSession
npm -g nodemon
nodemon server
```
This starts up a watch on your server component and will restart the service anytime a file changes. Very handy for development


