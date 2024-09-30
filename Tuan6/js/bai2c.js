function choncafe() {
    var check = document.querySelectorAll('input[type="checkbox"]');
    var choncafe1 = [];

    const luachon1 = document.getElementById('kqchon');
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            choncafe1.push(check[i].value);
            // alert(check[i].value);
        }
    }
    if (choncafe1.length > 0) {
        luachon1.innerHTML = `${choncafe1.join(', ')}`;
    } else {
        alert("Bạn chưa chọn bất kỳ loại cà phê nào.");
    }
    
}
