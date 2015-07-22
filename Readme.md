# Obscurify

A simple pseudo-encryption function to obfuscate and restore numbers in JavaScript. Obscurify is particularly useful to create a more uniform and obfuscated form of a publicly visible number (i.e. an object's id number used in URLs).

[![build status](https://travis-ci.org/rocketwagon/obscurify.svg?branch=master)](https://travis-ci.org/rocketwagon/obscurify)

# getting started

Include obscurify in the module in which you would like to use it. The function works both ways and thus is used both to obscure and restore the original value. It works on numbers up to 32 bits.

# example

    // require and initialize
    var obscurify = require('obscurify')();

    // obscurify!
    var result = obscurify.pseudoEncrypt(1);
    console.log(result);                          // 1919821825
    console.log(obscurify.pseudoEncrypt(result)); // 1
