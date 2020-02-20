/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 20 Feburary 2020
; Modified By: Brendan Mulhern
; Description: This section of code is the Modules section.
;===========================================
*/ 

var url = require("url");

var myURL = url.parse("https://www.google.com/search?source=hp&ei=vbVOXsnMC8PlkwX0-qPIBw&q=cats&oq=cats&gs_l=psy-ab.3..0l10.2786.7932..8446...11.0..0.84.971.13....2..0....1..gws-wiz.....6..0i362i308i154i357j0i131.-6wCyun4iv8&ved=0ahUKEwiJn_ikyODnAhXD8qQKHXT9CHkQ4dUDCAc&uact=5");

console.log(myURL.protocol);
console.log(myURL.host);
console.log(myURL.query);