const Download_count_format = new Intl.NumberFormat(undefined,{
    style : "currency" , currency : "USD"
})

export function DownloasCountFormat(number : number){
    return Download_count_format.format(number)
}