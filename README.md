# mocha-ts-custom-reporter
Basic Mocha custom reporter written in Typescript + launch.json for VSCode debugging

I created this repo because I wanted to write a custom reporter for Mocha and debug it in VSCode, but I couldn't find anywhere a good and working example. After a half day of trials if found the perfect constellation, so I'm sharing it to save some time for others.

The custom-reporter example is taken of the official Mocha site,  but I rewrote it to Typescript.
Official site: https://mochajs.org/api/tutorial-custom-reporter.html


# Usage:
1. `npm i`
2. In VSCode open `Run and debug` from the Activity bar
3. Select `Debug Mocha tests` from the dropdown
4. Add breakpoints to your .spec files, or to the src/custom-reporter.ts file
5. Press play button (Start debugging)


Cheers :beer: