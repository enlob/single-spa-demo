import { registerApplication, start } from "single-spa";

const showWhenPrefix = (routes) => {
  return function (location) {
      return routes.some((route) => location.pathname.startsWith(route));
  };
}

const showWhenAnyOf = (routes) => {
  return function (location) {
      return routes.some((route) => location.pathname === route);
  };
}

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@single-spa/angular1",
  app: () => System.import("@single-spa/angular1"),
  activeWhen: showWhenPrefix(["/angular1"])
});

registerApplication({
  name: "@single-spa/angular2",
  app: () => System.import("@single-spa/angular2"),
  activeWhen: showWhenPrefix(["/angular2"])
});

start({
  urlRerouteOnly: true,
});
