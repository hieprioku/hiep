function tinh_tong(a, b)
{
    return a + b;
}
let a = parseInt(prompt("Nhập số a"));
let b = parseInt(prompt("Nhập số b"));
let tong = tinh_tong(a, b);
document.write("Tổng hai số " + a + " + " + b + " là " + tong);
