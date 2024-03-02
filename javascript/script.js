import { router } from "./components/router.mjs";

const start = () => {
    router()
}



window.onhashchange = () => {
    router();
    location.reload()
  };

start()