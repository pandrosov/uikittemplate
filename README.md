# UIkit
Structure of project

components folder (folder with all sources of custom components):
  fonts - fonts files
  images - project images
  js - components of js files
  styles - custom components after compile UIkit theme

custom folder (custom components with theme):
  icons - custom icons to compile icons for theme
  theme - files of theme components
  import_components.less - file of import all file from components/styles/*.less
  mysitetheme.less - rename this file to create theme css file in /dist folder

dist folder:
  css: 
    uikit.mysitetheme.min.css - compiled filed of all style files
  js:
    uikit.min.js - compiled UIkit js
    uikit.icons.min.js - compiled icons (with icons from /custom/icons)
    build.min.js - compiled js files in 1 file (js files from /components/js)


Install:

1. git clone https://github.com/pandrosov/uikittemplate
2. install pnpm and run pnpm watch
3. run pnpm watch-dev

Enjoy!
