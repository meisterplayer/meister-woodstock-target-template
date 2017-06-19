# Building and/or importing MeisterPlayer #

## Prerequisites ##

- NodeJS > v6.9.4 
- NPM 5
- Knowledge of Javascript & ES6

## Definitions ##

### Meister - Target ###
The project you are currently looking at. You need this if you want to build your own Meisterplayer-bundle and include it in your website. You can also use this project to do your own Meisterplayer development, do PR's or create a new plugin. 

*You do not need this project* if you have your own node development environment with browserify, rollup, webpack or such. You can `npm install` all needed modules and import them into your project. Check out the index.js file to get an idea of how to import and initialise Meister.

### Meister-core ###
The Meister-core without plugins is nothing more as some utilities, the Meister-constructor and EventHandler. This is freely available from GitHub and can be installed from NPM

### Meister Core Plugins ###
The open-source plugins you need to play media and control the player. These plugins are:

```
@meisterplayer/plugin-basemedia
@meisterplayer/plugin-html5player
@meisterplayer/plugin-debugoverlay
@meisterplayer/plugin-message
@meisterplayer/plugin-multisource
@meisterplayer/plugin-standardui

```

### Optional free plugins ###

```
@meisterplayer/plugin-hls
@meisterplayer/plugin-dash
@meisterplayer/plugin-nativehls
@meisterplayer/plugin-smooth
@meisterplayer/plugin-webvtt
```

### Commercial plugins ###
These are not available through GitHub and/or NPM. The meister-team will provide you with a build of the plugins upon request. You can import these into your own project or in this boilerplate project.


## Building ##
There are 4 ways of building Meisterplayer:

1. Use this target-project and install the core/free plugins from NPM
2. Use this target-project and `npm install` as files to link the modules so you can work on them
3. Use this target-project and install the plugins using NPM but reference them to a specific GitHub branch or commit. If you would choose to reference the develop-branch you'd be running the bleeding edge version of Meister and the Core/Free plugins
4. Do not use this target and include the modules in your own project.
5. Download a prebuilt Meisterplayer from https://meisterplayer.com 

### 1. Just install using NPM ###
Steps :

- After cloning this project check whether you need all the plugins defined in package.json. Remove the ones you do not need. 
-  Run `npm install`.
-  Before moving on open `src/js/Meisterplayer.js` and remove the plugins you removed in package.json. Also remove the corresponding plugins in the `Meister.builtIn` statement.
-  Open index.html and configure the player to your needs. 
-  Your done!

For a live-reloading webserver run `npm start`. If you want to build a minified dist version, run `npm run build:dist` you'll find a minified bundle in the `dist`-folder

### 2. NPM Link the modules ###
See DEVELOP.md 

### 3. Bleeding edge GitHub ###
Instead of using the stable NPM packages you can live life on the bleeding edge and refer to github branches or commits. Follow the procedure of 1, only change the dependencies in package.json like so:

```
  "dependencies": {
    "@meisterplayer/meisterplayer": "git://github.com/meisterplayer/meisterplayer.git#develop",
    "@meisterplayer/plugin-basemedia": "^5.0.2",
    "@meisterplayer/plugin-dash": "^5.0.1",
    "@meisterplayer/plugin-html5player": "^5.1.0",
    "@meisterplayer/plugin-multisource": "^5.0.1",
    "@meisterplayer/plugin-nativehls": "^5.0.1",
    "@meisterplayer/plugin-smooth": "^5.0.1",
    "@meisterplayer/plugin-standardui": "git://github.com/meisterplayer/ui-standardui.git#feature\/chromecast-button-bottom-bar", // reference a specific branch
    "@meisterplayer/plugin-webvtt": "^5.0.1"
  }

```


### 4. Import into your own project ###
Instead of building separately from your own project you can install Meisterplayer and it's plugins in your project using `npm install`:

```
npm i -s @meisterplayer/meisterplayer @meisterplayer/plugin-basemedia @meisterplayer/plugin-dash @meisterplayer/plugin-html5player @meisterplayer/plugin-multisource @meisterplayer/plugin-nativehls @meisterplayer/plugin-smooth @meisterplayer/plugin-standardui @meisterplayer/plugin-webvtt

```

You should import the plugins and meister-core in one file and load the plugins using the Meister.builtIn statement like so;

```
import Meister from '@meisterplayer/meisterplayer/index';
import BaseMedia from '@meisterplayer/plugin-basemedia/index';
import Html5Player from '@meisterplayer/plugin-html5player/index';
import StandardUi from '@meisterplayer/plugin-standardui/index';
import DebugOverlay from '@meisterplayer/plugin-debugoverlay/index';
import NativeHls from '@meisterplayer/plugin-nativehls/index';
import Hls from '@meisterplayer/plugin-hls/index';
import Dash from '@meisterplayer/plugin-dash/index';
import MultiSource from '@meisterplayer/plugin-multisource/index';
import WebVtt from '@meisterplayer/plugin-webvtt/index';
import Smooth from '@meisterplayer/plugin-smooth/index';


Meister.builtIn = {
    [Html5Player.pluginName]: {},
    [BaseMedia.pluginName]: {},
    [StandardUi.pluginName]: {},
    [NativeHls.pluginName]: {},
    [Hls.pluginName]: {},
    [Dash.pluginName]: {},
    [MultiSource.pluginName]: {},
    [WebVtt.pluginName]: {},
    [Smooth.pluginName]: {},
    [DebugOverlay.pluginName]: {},
};

Meister.Configuration.overwrite(Meister.builtIn);
```

Where you import this or how you want to include the library in your project is entirely up to you. Please be aware that using this method will decrease the Meister-core team ability to debug your application. So if you have a support contract and need support, be sure to create a single bundle for meisterplayer (types 1,2,3) and import in your code. This way we are still capable of injecting a debugbuild using Charles proxy.

#### Important: Es6 transpiling ####
Please note the imports reference to `index` which essentially means they import the es6-source files, your project must be setup to transpile ES6 (babel). If it has been setup with babel you will get the benefit of optimalisations your transpiler/packager has in place.
If you do not use ES6 but wish to package your project with minified meister-code you should remove the reference to `/index` at every import-stagement.
*Commercial plugins are transpiled and minified*

## CLI Reference ##

- `npm start` : start development server 
- `npm run build` : create bundle without minify
- `npm run dist` : create dist bundle, with minify
- `npm run jsdoc` : create documentation from JSDoc blocks
- `npm run bump` : bump version (either  --minor or --major )
- `npm run changelog` : append commits to changelog with conventional changelogs (see [http://notebook.aaronwest.net/2015/08/03/better-documentation-using-conventional-changelog.html]() )
- `npm run generate-docs` Generate documentation from installed plugins. *might be buggy at this time*
