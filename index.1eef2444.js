!function(){let e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,t=/^[a-zA-ZА-Яа-я ]*$/,n=document.getElementById("form-btn"),r=document.getElementById("name"),l=document.getElementById("email"),a=document.getElementById("text"),d=document.getElementById("result"),i=document.getElementById("error-name"),s=document.getElementById("error-email"),u=document.getElementById("error-text"),o=!1,m=!1,c=!1,g=async()=>{if(0!==r.value.length&&0!==l.value.length&&0!==a.value.length&&o&&m&&c){let e={name:r.value,email:l.value,text:a.value};try{await fetch("https://run.mocky.io/v3/435b8793-8272-4a80-8398-381cdb9640de",{method:"POST",body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{d.classList.remove("form__result-error"),d.innerHTML=e.message})}catch(e){console.log(e)}finally{r.value="",l.value="",a.value=""}}else d.classList.add("form__result-error"),d.innerHTML="Заполните все поля"};n.addEventListener("click",g),r.addEventListener("blur",e=>{!t.test(String(e.target.value))||e.target.value.length<3?(i.innerHTML="Не мение 3 букв",o=!1):(i.innerHTML="",o=!0)}),l.addEventListener("blur",t=>{e.test(String(t.target.value).toLowerCase())?(s.innerHTML="",m=!0):(s.innerHTML="Неверный email",m=!1)}),a.addEventListener("blur",e=>{e.target.value.length<7?(u.innerHTML="Минимум 7 символов",c=!1):(u.innerHTML="",c=!0)}),r.addEventListener("focus",()=>i.innerHTML=""),l.addEventListener("focus",()=>s.innerHTML=""),a.addEventListener("focus",()=>u.innerHTML="")}();
//# sourceMappingURL=index.1eef2444.js.map
