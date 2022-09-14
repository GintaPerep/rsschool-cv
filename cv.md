# __Ginta Perepjolkina__

![my photo](https://i.im.ge/2022/09/13/1QpOa8.my-photo.th.jpg) 

### __*Junior front-end developer*__
---

## __*Contact information*__
> _**Phone:**_ +371 26012881 <br>
> _**E-mail:**_ ginta.aizstrauta@gmail.com <br>
> _**GitHub:**_ [GintaPerep](https://github.com/GintaPerep) <br>
> _**LinkedIn:**_ [Ginta Perepjolkina](linkedin.com/in/ginta-perepjolkina-0aa88a16) <br>
> _**Discord:**_ Ginta Perepjolkina#5856 <br>
> _**Location:**_ Riga, Latvia <br>

---

## __*About me*__
> *So far, I have successfully worked in the banking and financial industry for more than 15 years with companies and private clients. My previous work experience remains in history, because I have decided to change my profession to Front-end developer. This is my biggest challenge in life and I will definitely achieve it. Starting from January 2022, I am learning programming by self-learning using courses: Linkedin.com, Udemy.com and youtube.com. At the given moment, I started training in the RS School program: JavaScript Mentoring (Basic level). I'm open to everything new.*


---

## __*Skills*__
> - MS Office (Excel, World, PowerPoint, etc.) <br>
> - HTML, CSS, Javascript basic <br>
> - SQL basic <br>
> - GitHub, Visual Studio Code <br>


---

## __*Code Example*__
```javascript
 
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");  
    })

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");  
      })

    loginForm.addEventListener("submit", e => {
      e.preventDefault();

      //Perform your AJAX/Fetch login

      setFormMessage(loginForm, "error", i18next.t('wrong-user-name-pass'));
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
        if (e.target.id === "nameSurname-id" && e.target.value.length > 0 && e.target.value.length < 10) {
          setInputError(inputElement, i18next.t('error2'));
        }
      });

      inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
      });
    });
});
```


---

## __*Experience*__
> * **Media Stream** - 2004-2005 Office secretary; <br>
> * **Nordic Training International** - 2005-2006 Office executive; <br>
> * **SEB banka:** 
>     * 2006-2008 Customer Service specialist; <br>
>     * 2008-2012 Security services; <br>
>     * 2012-2014 Investments - Portfolio Administrator; <br>
>     * 2016-2017 Investment Portfolio Control Specialist; <br>
>     * 2019-2022 Account Manager Assistant; <br> 


---

## __*Education*__
> * **RS School** - Stage 0 - 2022 -; <br>
> * **Riga Technical University** - Master of social science in management 2008-2010; <br>
> * **Riga Technical University** - Bachelor of social science in management 2004-2008; <br>
> * **Riga's Commercy gymnasium** - 2001-2004; <br>


---

## __*Languages*__
> * **Latvian** - Native; <br>
> * **Russian** - Fluent speaking, reading (A2); <br>
> * **English** - B1; <br>
> * **German** - A2; <br>
