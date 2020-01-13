var request= require('request')

var forecast=(latitude,longitude, callback )=>{
    var url='https://api.darksky.net/forecast/c12d65fdcfc0d6151b848e142ee7f408/'+latitude+','+longitude
    request({url, json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather',undefined)
        }
        else if(body.error){
           callback('Did not find the match,try another search', undefined)
        }
        else{
            callback(undefined,{
        
                temp:body.currently.temperature,
                rain:body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast