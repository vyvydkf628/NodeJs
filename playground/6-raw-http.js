const https = require('https')
const url = 'https://api.darksky.net/forecast/a1ee992c7aaea81a4d4f6bc81f52dc23/40,-75?lang=ko'

const request = https.request(url,(response)=>{
    let data = ''

    response.on('data',(chunk)=>{
        data = data + chunk.toString()
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })

})


request.on('error',(error)=>{
    console.log('An error', error)
})
request.end()