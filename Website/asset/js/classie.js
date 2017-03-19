/*/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
/_/_/_/_/                                              _/_/_/_/_/
_/_/_/_/  ____  __  ______  __  ________   ________   _/_/_/_/_/
/_/_/_/  / __ \/ / / / __ \/  |/  /  _/ | / / ____/  _/_/_/_/_/
_/_/_/  / / / / / / / /_/ / /|_/ // //  |/ / __/    _/_/_/_/_/
/_/_/  / /_/ / /_/ / _, _/ /  / // // /|  / /___   _/_/_/_/_/
_/_/   \____/\____/_/ |_/_/  /_/___/_/ |_/_____/  _/_/_/_/_/
/_/                                              _/_/_/_/_/
_/                                              _/_/_/_/_/
/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/
_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/


           +============================+
           |  [Website By Cole Fortson] |
           |   [KobaltDevelopment.com]  |
           +============================+
           |          classie.js        |
           +----------------------------+
*/

(function(window){'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)");}
var hasClass,addClass,removeClass;if('classList'in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c);};addClass=function(elem,c){elem.classList.add(c);};removeClass=function(elem,c){elem.classList.remove(c);};}
else{hasClass=function(elem,c){return classReg(c).test(elem.className);};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c;}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ');};}
function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c);}
var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie);}else{window.classie=classie;}})(window);