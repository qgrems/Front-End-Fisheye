function multimedia(media,dataphotographer,type)
{
        const first_name = dataphotographer.name;
        const first_name_slice =  first_name.split(' ').slice(0,1);
        if(type === 'video') return new Video(media,first_name_slice);
        else return new Image(media,first_name_slice);
}