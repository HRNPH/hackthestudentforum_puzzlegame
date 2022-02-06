
//function to generate a diary card
//export fuctions get_article_card
module.exports = function get_article_card(
    title,
    author,
    description,
    ids,
    keys = false,
    secret = false,
) {
    var export_card = ''
    if (secret == true && keys != false) {

        try{
            ids.forEach(function(id,index) {
                let article = `
                <article class="diary_card_container">
                    <div class="diary_bordered">
                        <a href="/dark/article/${id}/${keys[index]}" style="display:block;"> <div class="diary">
                            <div class="diary_header">
                                <div class="diary_author">
                                    <p align="center"><b>${author[index]}</b></p>
                                </div>
                                <div class="diary_title">  
                                    <p class="diary_nomargin">${title[index]}</p>
                                </div>
                            </div>
                            <div>
                                <div class="diary_description">
                                    <p class="diary_nomargin diary_des">
                                        ${description[index]}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </a>
        
                    </div>
                    <div class="spacing"><br></div>
                </article>`
                export_card = export_card + article
        
            });    
        }
        catch{
            export_card = '<h1 align="center" style="color: red;">No articles found</h1>'
        }
    } else{

        try{
            ids.forEach(function(id,index) {
                let article = `
                <article class="diary_card_container">
                    <div class="diary_bordered">
                        <a href="/article/${id}" style="display:block;"> <div class="diary">
                            <div class="diary_header">
                                <div class="diary_author">
                                    <p align="center"><b>${author[index]}</b></p>
                                </div>
                                <div class="diary_title">  
                                    <p class="diary_nomargin">${title[index]}</p>
                                </div>
                            </div>
                            <div>
                                <div class="diary_description">
                                    <p class="diary_nomargin diary_des">
                                        ${description[index]}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </a>
        
                    </div>
                    <div class="spacing"><br></div>
                </article>`
                export_card = export_card + article
        
            });    
        }
        catch{
            export_card = '<h1 align="center" style="color: red;">No articles found</h1>'
        }
        
    
    }
    

    
    return  export_card;
};