// The MIT License (MIT)
//
// Copyright (c) 2015 Rocket Wagon Labs LLC
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// This package uses a modified Feistel cipher in order to provide a reversible
// pseudo-encryption function on integers. Credit for this idea goes here:
// https://wiki.postgresql.org/wiki/Pseudo_encrypt

var defaults = {
  c1: 242346,
  c2: 849327,
  c3: 102853
};

var options = {};

var init = function init(userOpts) {
  userOpts = userOpts || {};
  options.c1 = userOpts.c1 || defaults.c1;
  options.c2 = userOpts.c2 || defaults.c2;
  options.c3 = userOpts.c3 || defaults.c3;
};


var pseudoEncrypt = function pseudoEncrypt(input) {

  // if uninitialized or initialized with wrong number of arguments, use defaults
  if (Object.keys(options).length != 3) {
    options = defaults;
  }

  var l1, l2, r1, r2;
  // select 16 most significant bits
  l1 = (input >> 16) & 65535;
  // select 16 least significant bits
  r1 = input & 65535;
  for (var i = 0; i < 3; i++) {
    l2 = r1;
    r2 = l1 ^ ((((options.c1 * r1 + options.c2) % options.c3) / options.c3) * 32767);
    l1 = l2;
    r1 = r2;
  }
  return (r1 << 16) + l1;
};

module.exports = {
  init         : init,
  pseudoEncrypt: pseudoEncrypt
};
