# Angular language picker
A fork that aims to provide out-of-box solution for selecting languages. [![Build Status](https://travis-ci.org/azachar/angular-language-picker.svg)](https://travis-ci.org/azachar/angular-language-picker)

# Home Page with examples
http://blog.chocolatejar.eu/angular-language-picker


## Features
* Country's flag
* Look and feel customization via templates
* Search between languages if there too many to select from
* Based on Bootstrap 3 and UI Bootstrap 1.1.0

## Install

```bash
bower install azachar/angular-language-picker --save
```

## Development

* The branch ``master`` contains the latest development version
* The documentation is located in the branch ``gh-pages``

* To build distribution use this command
```bash
  grunt build
```
* To include the development live preview into your project use

In the angular-language-picker folder

```bash
  bower link
  grunt dev
```

In your project folder

```bash
  bower link angular-language-picker
```