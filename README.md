

# Static site  and  styleguide Maker
Description
===========
Static site  and  styleguide Maker

Requirements
------------
* Node
* NPM
* Grunt
* Ruby
* SASS 3.4+
*Check SASS version sass-v
*Assemble http://assemble.io/

Folder Structure
----------------
```
/src            // Main Folder.
--/assets         // assets
----/css         //where your sass files get parsed to .
-----/styleguide.md         //This file MUST be here for the styleguide to work .
----/images         // .
-----/sprites         // put all your sprites here. Grunt will build spritesheet.png for you. It will also add a _sprites.scss file in your scss folder
----/js         // .
--/content         // .
----/markdown.md         // .
--/data         // .
--/scss         //put all your sass files here . 
--/styleguide         // the template for the styleguide. You can change the look of the styleguide here .
--/templates         //your hbs files for assemble go here .
----/layout         // .
----/pages         // .
----/partials         // .
/dist            // folder created when you run grunt server
/node_modules     // Folder created when running  npm install
/bower_components     // Folder created when running  bower install


```


Install node.js
---------------
Reference: http://nodejs.org/
Go to the node.js website and click the Install button.

Check to see if node.js installed properly...

```

$ node -v
```


Install grunt.js
----------------
Reference: http://gruntjs.com/getting-started#installing-the-cli

```

$ sudo npm install -g grunt-cli
```


Install bower
----------------
Reference: http://bower.io/#install-bower

```

$ npm install -g bower



Install node.js Dependencies / Modules
--------------------------------------
From within the cloned repository...

```
$ npm install
```


Install SASS
----------------------------
Reference: http://sass-lang.com/install
From within the cloned repository...

```
$ gem install sass
```

Using browsersync
------------------------
Reference: hhttp://www.browsersync.io/

Using Assemble
------------------------
http://assemble.io/docs/

start the server to preview static pages
------------------------
install bower components: bower install
install nmp dependencies: sudo npm install

Preview an app you have generated (with browsersync).
$ grunt server
or with more info on the terminal.
$ grunt server --verbose 

Using Jshint
------------------------
```
if you add any plugins for jquery add this to the top of each file
so jshint will ignore them
// jshint ignore: start

Also if you you want you can edit the jshintrc file and add the plugin vars to the 'globals' array. 
Example
  "globals": {
    "$":false,
    "jquery":false,
    "app":false,
    "google":false,
    "Modernizr":false
        // other explicit global names to exclude
  }
```

Dependencies already in the layout/defualt.hbs
------------------------
```
modernizr.js v2.8.3
You can upgrade to 3 if  desired. Just do
bower uninstall  modernizr

and reinstall 3 

or remove this dependency "bower uninstall  modernizr" and add it manually.

 jQuery v1.11.3
 Is also included by default. Do the same as in modernizr if you want a different version of jquery

```

Importing CSS Breakpoints Into JavaScript
------------------------
```
https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript

I have setup   _mediaquery-reference.scss and in apps.js so you can check in your JS what breakpoint you are in. I have setup a simple example


body:after {
	content: "mobile";
	display: none;
}
@media only screen and (min-width: 1025px) {
	body:after {
		content: "desktop";
		
	}
}
@media only screen and (min-width: 1200px) {
	body:after {
		content: "bigdesktop";
		
	}
}


```

