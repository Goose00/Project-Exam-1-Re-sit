var SpoonacularApi = require('spoonacular_api');

var defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
var apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = "e88e55e81aa04302ad722de760e86c51"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
apiKeyScheme.apiKeyPrefix['apiKey'] = "Token"

var api = new SpoonacularApi.IngredientsApi()
var opts = {
  'query': burger, // {String} The (natural language) search query.
  '_number': 10, // {Number} The maximum number of items to return (between 1 and 100). Defaults to 10.
  'metaInformation': false, // {Boolean} Whether to return more meta information about the ingredients.
  'intolerances': egg // {String} A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.autocompleteIngredientSearch(opts, callback);

