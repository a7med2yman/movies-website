const search_form = document.querySelector('form')
const search = document.querySelector('input')
const resultBox = document.querySelector('.resultBox')
const img = document.querySelector('img')
const movie_name = document.querySelector('.movieName')
const movie_desc = document.querySelector('.movieDesc')
const errMsg = document.querySelector('.errMsg')

search_form.addEventListener('submit' , (e)=>{    // for BUTTON
    e.preventDefault()

    const movie = search.value

    resultBox.classList.remove('show')
    errMsg.textContent =''

    fetch('http://localhost:3000/search?movie='+ movie).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                errMsg.textContent = data.error
            }else{
                resultBox.classList.add('show');
                img.setAttribute('src' , 'https://image.tmdb.org/t/p/w500/'+data.img)
                movie_name.textContent = data.title ;
                movie_desc.textContent = data.desc
            }
        })
    }

    )
})