
function triage(medias)
{
    const sortName = medias.sort(function(a, b){
        return a.title.localeCompare(b.title);
    })
    const sortData = medias.sort(function(a, b){
        return a.data.localeCompare(b.data);
    })
    console.log(sortName)
}

