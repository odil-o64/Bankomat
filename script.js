  let lang = prompt('uz / ru / eng').toLowerCase()
  let pass
  let summa
  let check
  let other

if (lang == "uz"){
    pass = prompt("Parolingizni kiriting!")
    if (pass.length == 4 && pass == '2000'){
        summa = +prompt('Summani kiriting \n10.000 - 2.000.000')
        if (summa >= 10000 && summa <= 2000000){
            check = prompt("Siz kiritgan pul miqdori " + summa + "\nCheck kerakmi? \nHa / Yo'q!").toLowerCase()
            if (check == "ha"){
                alert("Pulingizni oling")
            }else{
                alert("Pulingizni oling\n Check yo'q")
            }
        }else{
            alert("Siz noto'g'ri pul miqdorini kiritdingiz")
        }
    }else{
        alert("Siz noto'g'ri parol kiritdingiz")
    }

} else if (lang == "ru"){
    pass = prompt("Введите пароль!")
    if (pass.length == 4 && pass == '2000'){
        summa = +prompt('Введите сумму денег \n10.000 - 2.000.000')
        if (summa >= 10000 && summa <= 2000000){
            check = prompt("Сумма денег, которую вы ввели" + summa + "\nЧек нужен? \nДа / Нет!").toLowerCase()
            if (check == "да"){
                alert("Берите свои деньги")
            }else{
                alert("Берите свои деньги! \nНо без чека")    
            }
        }else{
            alert("Вы ввели неправильный сумму денег!")
        }
    }else{
        alert("Вы ввели неправильный пароль!")
    }
}else if (lang == "eng"){
    pass = prompt("Enter password!")
    if (pass.length == 4 && pass == '2000'){
        summa = +prompt('Enter the amount of money \n10.000 - 2.000.000')
        if (summa >= 10000 && summa <= 2000000){
            check = prompt("The amount of money you entered" + summa + "\nNeed a check? \nYes / No!").toLowerCase()
            if (check == "yes"){
                alert("Take your money!")
            }else("Take your money! but \nwithout a check")
        }else{
            alert("You entered the wrong amount of money!")
        }
    }else{
        alert("You entered the wrong password!")
    }
}