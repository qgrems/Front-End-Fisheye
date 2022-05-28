function multimedia(media,dataphotographer,sliceName,type,tableauMedia)
{      
        if(type === 'video') return new Video(media,sliceName,dataphotographer,tableauMedia);
        else return new Image(media,sliceName,dataphotographer,tableauMedia);
        
}