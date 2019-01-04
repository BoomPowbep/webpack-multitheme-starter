# webpack-multitheme-starter

Webpack starter that features support of dark and light mode for your theme.

## Setting up
First, install dependencies.

	npm install

## Usage

**The public folder needs to be on a server root directory in order to work properly.**

### Overview

Use the following entry points for your scripts and styles:
- **src/js/main.js**
- **src/scss/core/style.scss** • Core Scss
- **src/scss/variants/dark/style.scss** • Dark theme specific Scss
- **src/scss/variants/light/style.scss** • Light theme specific Scss


**index.html** is located in the **public** folder. Imports are already set up.

**src/js/App.js** contains a starter class and is instanciated by default in **main.js**.

All 3 **style.scss** already includes two files located in their respective **essentials** folder: **variables.scss** and **main.scss**.

### Tips & tricks

If you need to call an asset file (image, font, etc) from your scss, create a dedicated folder in **src/scss/currentThemeOrWhatever** then refer to it like if you were in the **src/scss/whatever/style.scss** file (whatever where you actually are). For example:

    background-image: url('./images/yourImage.svg');

An asset file called from the HTML must be located in **public/theTypeOfAsset**. Example:

	<img alt="Your Image Called From HTML" src="images/yourImageCalledFromHTML.png">

## Run
#### Watch for development

	npm run watch

#### Build for production

	npm run prod

## Credits
This project is based on [sample-project](https://github.com/Hugotgot/sample-project) by [Hugotgot](https://github.com/Hugotgot).
