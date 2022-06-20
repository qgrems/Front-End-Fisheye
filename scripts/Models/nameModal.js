class NameModal 
{
    constructor(photographerName)
    {
        this._photographername = photographerName
    }
    get photographername()
    {
        return this._photographername
    }
    render(){
        const name = document.createElement('div');
        name.innerHTML = `
        <h2>${this.photographername}<h2>
       `
        return name
    }
}