
const button=document.getElementById('submit-button')
let text=document.querySelector('.text')


const findweather=async ()=>{
    try{
        text.innerHTML=""
        let city=document.getElementById('city').value
        const key="139268859f984c5abee153728252205"

        const url =`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`


        await fetch(url).then((res)=>res.json()).then(data=>{
        console.log(data);
        if(data && data.current && data.current.condition){
            console.log(data.current.condition.text)
        }
        // text.innerHTML=data.current.condition.text;
        let temp=document.createElement("h2")
        let descript=document.createElement("h3")
        let icon=document.createElement('img')

        descript.innerHTML=data.current.condition.text
        temp.innerHTML= `${data.current.temp_c}'c`
        icon.setAttribute('src',data.current.condition.icon)

        text.appendChild(icon)
        text.appendChild(temp)
        text.appendChild(descript)
})
    }catch(err){
        console.log(err);
    }

}

button.addEventListener('click',findweather);

