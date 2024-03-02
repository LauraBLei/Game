import { startPage } from "../page/startPage.mjs";
import { startingPoint } from "../page/startingPoint.mjs";
import {runPath1} from "../paths/path1.mjs"
import {runPath2} from "../paths/path2.mjs"
import {runPath3} from "../paths/path3.mjs"




export function router() {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
  
    const routes = [
      // Regular Expression - RegEx for short
      { path: /^\/(index.html)?$/, controller: startPage },
      { path: /^\/startingPoint(\/index.html)?$/, controller: startingPoint },
      { path: /^\/path1(\/index.html)?$/, controller: runPath1 },
      { path: /^\/path2(\/index.html)?$/, controller: runPath2 },
      { path: /^\/path3(\/index.html)?$/, controller: runPath3 },
      { path: /.*/, controller: startPage },
    ];
  
    const route = routes.find((route) => route.path.test(hash));
  
    route.controller();
  }
  