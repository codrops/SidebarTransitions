# send

[![NPM version](https://badge.fury.io/js/send.svg)](https://badge.fury.io/js/send)
[![Build Status](https://travis-ci.org/visionmedia/send.svg?branch=master)](https://travis-ci.org/visionmedia/send)
[![Coverage Status](https://img.shields.io/coveralls/visionmedia/send.svg?branch=master)](https://coveralls.io/r/visionmedia/send)

  Send is Connect's `static()` extracted for generalized use, a streaming static file
  server supporting partial responses (Ranges), conditional-GET negotiation, high test coverage, and granular events which may be leveraged to take appropriate actions in your application or framework.

## Installation

    $ npm install send

## Examples

  Small:

```js
var http = require('http');
var send = require('send');

var app = http.createServer(function(req, res){
  send(req, req.url).pipe(res);
}).listen(3000);
```

  Serving from a root directory with custom error-handling:

```js
var http = require('http');
var send = require('send');
var url = require('url');

var app = http.createServer(function(req, res){
  // your custom error-handling logic:
  function error(err) {
    res.statusCode = err.status || 500;
    res.end(err.message);
  }

  // your custom headers
  function headers(res, path, stat) {
    // serve all files for download
    res.setHeader('Content-Disposition', 'attachment');
  }

  // your custom directory handling logic:
  function redirect() {
    res.statusCode = 301;
    res.setHeader('Location', req.url + '/');
    res.end('Redirecting to ' + req.url + '/');
  }

  // transfer arbitrary files from within
  // /www/example.com/public/*
  send(req, url.parse(req.url).pathname, {root: '/www/example.com/public'})
  .on('error', error)
  .on('directory', redirect)
  .on('headers', headers)
  .pipe(res);
}).listen(3000);
```

## API

### Options

#### etag

  Enable or disable etag generation, defaults to true.

#### dotfiles

  Set how "dotfiles" are treated when encountered. A dotfile is a file
  or directory that begins with a dot ("."). Note this check is done on
  the path itself without checking if the path actually exists on the
  disk. If `root` is specified, only the dotfiles above the root are
  checked (i.e. the root itself can be within a dotfile when when set
  to "deny").

  The default value is `'ignore'`.

  - `'allow'` No special treatment for dotfiles.
  - `'deny'` Send a 403 for any request for a dotfile.
  - `'ignore'` Pretend like the dotfile does not exist and 404.

#### index

  By default send supports "index.html" files, to disable this
  set `false` or to supply a new index pass a string or an array
  in preferred order.

#### maxAge

  Provide a max-age in milliseconds for http caching, defaults to 0.
  This can also be a string accepted by the
  [ms](https://www.npmjs.org/package/ms#readme) module.

#### root

  Serve files relative to `path`.

### Events

  - `error` an error occurred `(err)`
  - `directory` a directory was requested
  - `file` a file was requested `(path, stat)`
  - `headers` the headers are about to be set on a file `(res, path, stat)`
  - `stream` file streaming has started `(stream)`
  - `end` streaming has completed

## Error-handling

  By default when no `error` listeners are present an automatic response will be made, otherwise you have full control over the response, aka you may show a 5xx page etc.

## Caching

  It does _not_ perform internal caching, you should use a reverse proxy cache such
  as Varnish for this, or those fancy things called CDNs. If your application is small enough that it would benefit from single-node memory caching, it's small enough that it does not need caching at all ;).

## Debugging

 To enable `debug()` instrumentation output export __DEBUG__:

```
$ DEBUG=send node app
```

## Running tests

```
$ npm install
$ npm test
```

## License 

(The MIT License)

Copyright (c) 2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
