function multimedia(media,dataphotographer,sliceName,type)
{       
        if(type === 'video') return new Video(media,sliceName,dataphotographer);
        else return new Image(media,sliceName,dataphotographer);
}