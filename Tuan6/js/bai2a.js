function hienthi(){
    const name1 = document.getElementById("fullname").value;
    const password1 = document.getElementById("password").value;

    document.write("<table width='50%' border='1' align='center> float ='right'");
    document.write("<tr>");
    document.write("<td colspan='2' align = 'center'>THÔNG TIN ĐĂNG KÝ</td>")
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td align = 'center'>Họ Tên</td>")
    document.write("<td align = 'center'>Password</td>")
    document.write("</tr>");
    

    document.write("<tr>");
    document.write("<td align = 'center'>" + name1 +"</td>")
    document.write("<td align = 'center'>" + password1 +"</td>")
    document.write("</tr>");
    document.write("</table>");
}