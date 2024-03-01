import { startPage } from "../page/startPage.mjs";
import { startingPoint } from "../page/startingPoint.mjs";




export function router() {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
  
    const routes = [
      // Regular Expression - RegEx for short
      { path: /^\/(index.html)?$/, controller: startPage },
      { path: /^\/startingPoint(\/index.html)?$/, controller: startingPoint },
      { path: /.*/, controller: startPage },
    ];
  
    const route = routes.find((route) => route.path.test(hash));
  
    route.controller();
  }
  