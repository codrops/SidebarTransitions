1.4.4 / 2014-08-04
==================

  * deps: send@0.7.4
    - Fix serving index files without root dir

1.4.3 / 2014-07-29
==================

  * deps: send@0.7.3
    - Fix incorrect 403 on Windows and Node.js 0.11

1.4.2 / 2014-07-27
==================

  * deps: send@0.7.2
    - deps: depd@0.4.4

1.4.1 / 2014-07-26
==================

  * deps: send@0.7.1
    - deps: depd@0.4.3

1.4.0 / 2014-07-21
==================

  * deps: parseurl@~1.2.0
    - Cache URLs based on original value
    - Remove no-longer-needed URL mis-parse work-around
    - Simplify the "fast-path" `RegExp`
  * deps: send@0.7.0
    - Add `dotfiles` option
    - deps: debug@1.0.4
    - deps: depd@0.4.2

1.3.2 / 2014-07-11
==================

  * deps: send@0.6.0
    - Cap `maxAge` value to 1 year
    - deps: debug@1.0.3

1.3.1 / 2014-07-09
==================

  * deps: parseurl@~1.1.3
    - faster parsing of href-only URLs

1.3.0 / 2014-06-28
==================

  * Add `setHeaders` option
  * Include HTML link in redirect response
  * deps: send@0.5.0
    - Accept string for `maxAge` (converted by `ms`)

1.2.3 / 2014-06-11
==================

  * deps: send@0.4.3
    - Do not throw un-catchable error on file open race condition
    - Use `escape-html` for HTML escaping
    - deps: debug@1.0.2
    - deps: finished@1.2.2
    - deps: fresh@0.2.2

1.2.2 / 2014-06-09
==================

  * deps: send@0.4.2
    - fix "event emitter leak" warnings
    - deps: debug@1.0.1
    - deps: finished@1.2.1

1.2.1 / 2014-06-02
==================

  * use `escape-html` for escaping
  * deps: send@0.4.1
    - Send `max-age` in `Cache-Control` in correct format

1.2.0 / 2014-05-29
==================

  * deps: send@0.4.0
    - Calculate ETag with md5 for reduced collisions
    - Fix wrong behavior when index file matches directory
    - Ignore stream errors after request ends
    - Skip directories in index file search
    - deps: debug@0.8.1

1.1.0 / 2014-04-24
==================

  * Accept options directly to `send` module
  * deps: send@0.3.0

1.0.4 / 2014-04-07
==================

  * Resolve relative paths at middleware setup
  * Use parseurl to parse the URL from request

1.0.3 / 2014-03-20
==================

  * Do not rely on connect-like environments

1.0.2 / 2014-03-06
==================

  * deps: send@0.2.0

1.0.1 / 2014-03-05
==================

  * Add mime export for back-compat

1.0.0 / 2014-03-05
==================

  * Genesis from `connect`
