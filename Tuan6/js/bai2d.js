function doimau() {
    var check = document.querySelectorAll('input[type="radio"]');
    var checkedValue = null;
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            checkedValue = check[i].value;
            break;
        }
    }
    var selectElement = document.getElementById('chonmau'); 
    var giaTriDuocChon = selectElement.options[selectElement.selectedIndex].value;
    

    var doitao = document.getElementById('doitao');
    if (checkedValue === 'background') {
        doitao.style.backgroundColor = giaTriDuocChon;
    } else if (checkedValue === 'color') {
        doitao.style.color = giaTriDuocChon;
    }
}