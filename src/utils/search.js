const request = require('request')

const search = (movie , callback)=>{
    const url = 'https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1&api_key=2a772711770a73364f3c4cfd0f952bcd'

request({url , json:true} , (error , {body})=>{
        if(error){
            callback('Unable to connect to movie services!', undefined)
        }else if(body.results.length ===0){
            callback('Unable to find movie. Try another search.', undefined)
        }else{
            callback(undefined , {
                title : body.results[0].title ,
                desc : body.results[0].overview ,
                img : body.results[0].poster_path
            })
        }
})

}
search('thor' , (error ,{title , desc , img})=>{
    if (error){
        console.log(error)
    }
    // console.log(title , desc , img)
})

module.exports = search