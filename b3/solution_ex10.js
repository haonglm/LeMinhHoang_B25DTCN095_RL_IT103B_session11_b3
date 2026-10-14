// Tiêu chí         | Function Declaration              | Function Expression           | Arrow Function
// Cú pháp          | function f() {}                   | const f = function() {}       | const f = () => {}
// Hoisting         | Gọi trước khi viết code được      | Gọi trước là lỗi ngay         | Gọi trước là lỗi ngay
// Con trỏ this     | Thay đổi theo nơi gọi hàm         | Thay đổi theo nơi gọi hàm     | Giữ nguyên từ ngữ cảnh cha
// Cách dùng chính  | Method trong Object               | Ít dùng, dùng khi gán biến    | Mặc định dùng cho cả dự án

// Function Declaration: Chạy bình thường
sayHello();
function sayHello() {
  console.log("Xin chào!");
}

// Arrow Function : lỗi vì chưa định nghĩa mà đã gọi
sayBye();
const sayBye = () => {
  console.log("Tạm biệt!");
};