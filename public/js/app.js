console.log('here is javascript active')
fetch('http://localhost:3000/weather?address=newyork').then((response)=>{
    response.json().then((data)=>{
        console.log(data.location)
        console.log(data.forecast)
    })
})

