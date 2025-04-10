module.exports = {
  rules: {
    'log-hello': {
      create: function (context) {
        console.log("This is a log from the custom plugin!");

        return {
          Program(node) {
            console.log("Logging from the program node...");
          }
        };
      }
    }
  }
};
