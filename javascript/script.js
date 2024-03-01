import { router } from "./components/router.mjs";

const start = () => {
    router()
}

start()

window.onhashchange = () => {
    router();
  };