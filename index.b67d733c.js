const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,t=/^[a-zA-ZА-Яа-я ]*$/,n=document.getElementById("form-btn"),r=document.getElementById("name"),l=document.getElementById("email"),a=document.getElementById("text"),d=document.getElementById("result"),s=document.getElementById("error-name"),i=document.getElementById("error-email"),o=document.getElementById("error-text");let u=!1,m=!1,c=!1;const g=async()=>{if(0!==r.value.length&&0!==l.value.length&&0!==a.value.length&&u&&m&&c){let e={name:r.value,email:l.value,text:a.value};try{await fetch("https://run.mocky.io/v3/435b8793-8272-4a80-8398-381cdb9640de",{method:"POST",body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{d.classList.remove("form__result-error"),d.innerHTML=e.message})}catch(e){console.log(e)}finally{r.value="",l.value="",a.value=""}}else d.classList.add("form__result-error"),d.innerHTML="Заполните все поля"};n.addEventListener("click",g),r.addEventListener("blur",e=>{!t.test(String(e.target.value))||e.target.value.length<3?(s.innerHTML="Не мение 3 букв",u=!1):(s.innerHTML="",u=!0)}),l.addEventListener("blur",t=>{e.test(String(t.target.value).toLowerCase())?(i.innerHTML="",m=!0):(i.innerHTML="Неверный email",m=!1)}),a.addEventListener("blur",e=>{e.target.value.length<7?(o.innerHTML="Минимум 7 символов",c=!1):(o.innerHTML="",c=!0)}),r.addEventListener("focus",()=>s.innerHTML=""),l.addEventListener("focus",()=>i.innerHTML=""),a.addEventListener("focus",()=>o.innerHTML="");
//# sourceMappingURL=index.b67d733c.js.map