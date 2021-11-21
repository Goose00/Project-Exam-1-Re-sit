const recipesUrl = "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=egg";

fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=egg", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "3cbd8fe6e8msh154d62eb58c16c4p1fe8d5jsnc9c87e469b9c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

function getIngredients(json) {
    consoole.dir(json);
    const ingredients = json;
    
    const container = document.querySelector(".results");
    let newHtml = "";
    
    for (let i = 0; i <ingredients.length; i++) {
        if (i === 5) {break; }
        
        let ingredientValue = "No ingredients found";
        
        if (ingredients[i].type); {
            ingredientValue = ingredients[i].type;
        }
        
        const details = `<div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="card">
                                    <div class="joke-detail">
                                        <h4 class="type">${ingredients[i].type}</h4>
                                        <div class="setup">${ingredients[i].setup}</div>
                                        <div class="ingredient">${ingredients[i].ingredient}</div>
                                    </div>
                                </div>
                            </div>`
            newHtml += details;
        

            for (let i = 0; i < ingredients.length; i++) {
                if (i === 2) {document.title = ingredients[i].setup;}
            }
        }
        container.innerHTML = newHtml;
    }
    
// I´m very rusty in this and had hoped to be able to finish, but alas 