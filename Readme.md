# Obscurify

A simple pseudo-encryption function to obfuscate and restore numbers in JavaScript. Obscurify is particularly useful to create a more uniform and obfuscated form of a publicly visible number (i.e. an object's id number used in URLs).

[![build status](https://travis-ci.org/rocketwagon/obscurify.svg?branch=master)](https://travis-ci.org/rocketwagon/obscurify)

# getting started

Include obscurify in the module in which you would like to use it. The function works both ways and thus is used both to obscure and restore the original value. It works on numbers up to 32 bits.

# example

    var obscurify = require('obscurify');

    // obscurify!
    var result = obscurify.pseudoEncrypt(1);
    console.log(result);                          // 1919821825
    console.log(obscurify.pseudoEncrypt(result)); // 1

Note that this is using the default values to generate the obfuscated number and will be the same as anyone using the default module. The generation may be changed by choosing different constants (3 6-digit numbers) using the init function as follows:

    var obscurify = require('obscurify');
    
    obscurify.init({
     c1: 324324,
     c2: 923405,
     c3: 329742
    });


The MIT License (MIT)

Copyright (c) 2015 Rocket Wagon Labs LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
