// eslint-plugin-myplugin/index.js
module.exports = {
  rules: {
    'log-hello': {
      create: function (context) {
        console.log("Hello from the custom ESLint plugin!");

        return {
          Program(node) {
            console.log("This is a program node.");
          }
        };
      }
    }
  }
};
