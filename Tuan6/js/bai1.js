function displayStudentinfo() {
    var StudentList = [];
    while (true) {
        var maSV = prompt("Nhập mã số sinh viên hoặc nhấn cancel để kết thúc", "");
        if (maSV === null) {
            break;
        }
        var tenSV = prompt("Nhập tên sinh viên", "");
        var lop = prompt("Nhập lớp của sinh viên", "");
        var student = { maSV, tenSV, lop };
        StudentList.push(student);
    }

    if (StudentList.length > 0) {
        document.write("<table width='50%' border='1px'>");
        document.write("<tr>");
        document.write("<td colspan='3' align='center'>Danh Sách Sinh Viên</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td align='center'>MSSV</td>");
        document.write("<td align='center'>Họ Tên</td>");
        document.write("<td align='center'>Lớp</td>");
        document.write("</tr>");

        for (let i = StudentList.length - 1; i >= 0; i--) {
            document.write("<tr>");
            document.write("<td align='center'>" + StudentList[i].maSV + "</td>");
            document.write("<td align='center'>" + StudentList[i].tenSV + "</td>");
            document.write("<td align='center'>" + StudentList[i].lop + "</td>");
            document.write("</tr>");
        }
        document.write("</table>");
    }
}
