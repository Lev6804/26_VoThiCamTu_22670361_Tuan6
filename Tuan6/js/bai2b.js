function maytinh (luachon){
    const number1 =eval(document.getElementById('number1').value);
    const number2 =eval(document.getElementById('number2').value);
    const ketqua =document.getElementById('ketqua');

    if(isNaN(number1) || isNaN(number2)){
        const kqkt =document.getElementById("aq");
        kqkt.innerHTML = "Lỗi: Vui lòng nhận số hợp lệ.";
    } else{
        let ketqua1;
        switch (luachon){
            case 'add' :
                ketqua1 = number1 + number2;
                break;
            case 'tru' :
                ketqua1 = number1 - number2;
                break;
            case 'chia' :
                ketqua1 = number1 / number2;
                break;
            case 'chiadu' :
                ketqua1 = number1 % number2;
                break;
            default:
                ketqua1 = "Phép tính không hợp lệ"
        }
        ketqua.value = `${ketqua1}`;
    }
    
}