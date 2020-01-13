console.log('here is javascript active')
fetch('/weather?address=newyork').then((response)=>{
    response.json().then((data)=>{
        console.log(data.location)
        console.log(data.forecast)
    })
})

