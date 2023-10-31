/*interface user {
    name : string
    username : string,
    social : {
        instagram_username : string,
        twitter_username : string,
        portfolio_url : string
    }
    profile_image : {medium : string},
}

interface links{
    download : string,
    self : string
}

interface urls {
    thumb : string,
    raw : string
}

export interface Gallery extends user, urls, links{
    likes : number,
    id : string,
    title : string,
    user : user,
    cover_photo : {urls : urls},
    links : links,

}

export interface PopUpModalProps extends Gallery {
    views : number,
    likes : number,
    id : string,

}*/


interface cover_photo{
    likes : string,
    urls : {raw : string, thumb :string}
}

interface links {
    download : string
}

interface user{
    social : {
        instagram_username : string,
        twitter_username : string,
        portfolio_url : string
    },
    profile_image : {medium : string},
    name : string
    username : string,
}

export interface Image {
    id : string
    cover_photo : cover_photo,
    title : string,
    user : user,
    tags : {title: string}[],
    links : links
}