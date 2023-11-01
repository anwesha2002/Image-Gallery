
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