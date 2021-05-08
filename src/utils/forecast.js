const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=5d25428216ec8709f24fbc4051188aa9&query='+latitude+','+longitude
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service.',undefined)
        }else if(body.error){
            callback('Unable to find the location. Try another search.',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+'°C. It feels like '+body.current.feelslike+'°C. Precipitation is '+body.current.precip+'mm. Humidity is '+body.current.humidity+'%.')
        }
    })    
}

module.exports=forecast