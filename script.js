let clock =() =>{
    let date = document.getElementById('date')
    let day = document.getElementById('day')
    let month = document.getElementById('month')
    let year = document.getElementById('year')
    let hour = document.getElementById('hour')
    let minute = document.getElementById('minute')
    let second = document.getElementById('second')

    let today = new Date()

    let weekDays = ["Дүйшөмбү","Шейшемби","Шаршемби","Бейшемби","Жума","Ишенби","Жекшемби",]
    let allMonth = ['Үчтүн','Бирдин','Жалган Куран','Чын Куран','Бугу','Кулжа','Теке','Баш Оона','Аяк Оона','Тогуздун','Жетинин','Бештин',]

    date.innerHTML=today.getDate()
    day.innerHTML=weekDays[today.getDay()-1]
    month.innerHTML=allMonth[today.getMonth()]
    year.innerHTML=today.getFullYear()
    hour.innerHTML=today.getHours()
    minute.innerHTML=today.getMinutes()
    second.innerHTML=today.getSeconds()



setTimeout(() => {
    clock()
}, 1000);

}

clock()