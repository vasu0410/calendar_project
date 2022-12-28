const date = new Date();

const renderCalendar = ()=>{
    date.setDate(1);

    const monthDays = document.querySelector('.days');
    
    // for starting of 1st day in the month
    const firstDayIndex = date.getDay();
    
    //for find last date of current month
    const lastdate = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    
    //for find last date of previous month
    const prevMonthdate = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    
    //to add next month date subtract firstday index and last date from 42 boxes
    const nextdate = 42-firstDayIndex-lastdate;

    
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    
    let showDate = document.querySelector('.date p');
    showDate.innerHTML = date.toDateString();
    
    let days = "";
    
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevMonthdate-x+1}</div>`   
    }
    for(let i=1;i<=lastdate;i++){
        if(i===new Date().getDate() && date.getMonth()===new Date().getMonth() && date.getFullYear() === new Date().getFullYear())
        {
            days += `<div class="today">${i}</div>`;
           
            date.setDate(new Date().getDate());
            showDate.innerHTML = date.toDateString();
            
        }
        else
        {
        days += `<div>${i}</div>`;
        }
    }
    for(let x=1;x<=nextdate;x++){
        days +=`<div class="next-date">${x}</div>`;
    }
    monthDays.innerHTML = days;

    // let dates = document.querySelectorAll('.days div');
    // dates.forEach(element => {
    //     element.addEventListener('click',()=>{
    //         if(confirm("do you want to change date?"))
    //         {
    //             date.setDate(element.innerHTML);
    //             showDate.innerHTML = date.toDateString();
    //         }    
    //     })
    // })
    
}

document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();

});
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
    console.log(date.getFullYear());
    
})

document.querySelector('.date h1').addEventListener('click',()=>{
    date.setMonth(new Date().getMonth());
    date.setFullYear(new Date().getFullYear());
    renderCalendar();
})

renderCalendar();