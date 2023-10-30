interface user {
    name : string
    username : string,
    social : {
        instagram_username : string,
        twitter_username : string,
        portfolio_url : string
    }
    profile_image : {medium : string},
    links : {
        photos : string
    }
}

interface links{
    download : string,
    self : string
}

interface urls {
    thumb : string,
    raw : string
}

export interface Gallery extends user, urls{
    likes : number,
    id : string,
    alt_description : string,
}

export interface PopUpModalProps extends Gallery, links {
    views : number,
    likes : number,
    id : string,
}