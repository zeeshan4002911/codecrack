# codecrack

A lightweight, web-based mini IDE built on top of Monaco Editor. This app provides essential features for a streamlined development experience, including an editor, formatter, and diff checker. It's designed to help developers write, format, and compare code effortlessly without the overhead of a full IDE.

## Features

- Monaco Editor Integration: A fast, feature-rich code editor providing syntax highlighting, autocompletion, and IntelliSense for various languages.

- Code Formatter: Automatically formats your code to follow standard conventions, ensuring consistency and readability.

- Diff Checker: Compare different versions of your code or compare two files to identify differences with an easy-to-read side-by-side diff viewer.

- Code Share: URL based code share support by push and pull of code to cloudflare database, with local storage persistency for code and user preferences cache.

## Future Scope

The application planned future enhancements include:

- Git Integration: Seamlessly connect to Git repositories to pull, commit, push, and track changes directly within the IDE.

- Compiler Integration: Support for compiling code directly from the app, allowing you to run and test your code in various programming languages.

- Whiteboard module

## Getting Started
### Prerequisites

* A modern web browser (Chrome, Firefox, or Safari)

* Basic knowledge of the programming front-end languages

### Installation

1. Clone this repository to your local machine:
> git clone https://github.com/zeeshan4002911/codecrack.git

2. Navigate to the project directory:
> cd codecrack

3. Install dependencies:
> npm install

4. Start the development server:
> npm start

Now open your browser and visit http://localhost:3000

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.
And then later Vite gets added for development, version 7.2.2 with @analogjs/vite-plugin-angular version 2.0.3.

## Changelog

###### 08 Nov, 2025
> * Editor Integrated
> * Theme toggle feature

###### 09 Nov, 2025
> * Editor language dropdown and search functionality
> * Added formatter, editor theme changes and responsiveness

###### 11 Nov, 2025
> * First Production version
> * Changes in build process
> * JSON Compression feature

##### 16 Nov, 2025
> * Bug Fixes and Enhancements
> * Diff Checker module Added
> * Local Storage based persistency for code and preferences

##### 03 Dec, 2025
> * Code Share Module Added
> * Added Cloudflare worker and D1 Storage for cloud storage based persistency
> * Confirmation Dialogs and Alert Toaster Added
