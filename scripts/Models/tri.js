 class Triage
 {

     render()
     {
        const article = document.createElement('article');
        article.innerHTML = `
        <div class="triage_container">
            <p class = "triage_text">Trier par</p>
            <select tabindex="3" id= "valuetriage" class ="triage_decoration">
                <option value="1">Popularité</option>
                <option value="2">Date</option>
                <option value="3">Titre</option>
            </select>    
        </div>`
        return article
     }
 }