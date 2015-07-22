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

Note that this is using the default values to generate the obfuscated number and is less secure. The generation may be changed by choosing different constants (3 6-digit numbers) using the init function as follows:

    var obscurify = require('obscurify');
    
    obscurify.init({
     c1: 324324,
     c2: 923405,
     c3: 329742
    });
