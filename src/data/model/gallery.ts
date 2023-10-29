export interface Gallery{
    user : {name : string},
    urls : {thumb : string},
    likes : number,
    id : string,
    alt_description : string,
}

export interface PopUpModalProps {
    urls : {raw : string},
    user : {
        username : string,
        name : string,
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
    views : number,
    likes : number,
    id : string,
    links : { download : string, self : string}
}