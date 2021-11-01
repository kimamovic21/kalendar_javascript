function resetKalendara (){ //2. dodajemo
    document.getElementById('title').innerText = '';//3. dodajemo
    document.getElementById('dani').innerHTML = '';//4. dodajemo
}

function popuniKalendar(godina,mjesec){//5. dodajemo
    resetKalendara(); //6. dodajemo
    let imenaMjeseci = [ //7. dodajemo
        'januar', 'februar', 'mart', 'april', 'maj', 'juni',
        'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'
    ];
    let imeIzabranogMjeseca = imenaMjeseci[mjesec-1]; //8. dodajemo
    let t = imeIzabranogMjeseca + '' + godina; //9. dodajemo
    document.getElementById('title').innerText = t; //10. dodajemo

    let prvi = new Date (godina, mjesec - 1, 1);//14. dodajemo
    let kraj = new Date (godina, mjesec, 0);//15. dodajemo

    let dUNP = prvi.getDay();//16. dodajemo
    if (dUNP == 0) dUNP = 7;//17. dodajemo

    let dUNK = kraj.getDay();//18. dodajemo
    if (dUNK == 0) dUNK = 7;//19. dodajemo

    let brojDana = kraj.getDate();//20. dodajemo

    let dani = [];//21. dodajemo

    for (let i=1; i<dUNP; i++){//22. dodajemo
        dani.push('');
    }

    for (let dan = 1; dan<=brojDana; dan++){//23. dodajemo
        dani.push(dan);
    }

    for (let i=dUNK; i<7; i++) {//24. dodajemo
        dani.push('');
    }
   // console.log(dani);
    let nedjelje = []; //25. dodajemo
    while (dani.length > 0){//26. dodajemo
        let narodnaNedjelja = dani.splice(0, 7);//27. dodajemo
        nedjelje.push(narodnaNedjelja);//28. dodajemo
    }
    //console.log(nedjelja);
    popupiTijeloKalendara(nedjelje);
}

function popupiTijeloKalendara(nedjelje){//29. dodajemo
    for (let nedjelja of nedjelje) { //30. dodajemo
        let red = document.createElement('tr'); //31. dodajemo

        for (let dan of nedjelja) {//32. dodajemo
            let td = document.createElement('td');//33. dodajemo
            td.innerText = dan;//34. dodajemo
            red.appendChild(td);//35. dodajemo
        }

        document.getElementById('dani').appendChild(red);//36. dodajemo
    }
}

window.addEventListener('load', main); //11. dodajemo window - ocitavanje web stranice
function main (){//12.dodajemo
    let sada = new Date ();//37. dodajemo
    //popuniKalendar(2021, 11); 
    //13. dodajemo
    popuniKalendar(sada.getFullYear(), sada.getMonth()+1);//38. dodajemo
}