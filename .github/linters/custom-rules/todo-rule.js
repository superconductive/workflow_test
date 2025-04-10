module.exports = function customRule(params, onError) {
  params.tokens.forEach(function(token) {
    if (token.type === 'inline' && token.content.includes('TODO')) {
      onError({
        lineNumber: token.lineNumber,
        detail: 'TODO found in the text.',
        context: token.content
      });
    }
  });
};
