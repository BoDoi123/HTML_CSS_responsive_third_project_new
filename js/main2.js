// Append and Prepend
// VD1:
// Bước 1: create element
const newImg = document.createElement("img");

console.log(newImg);

// Kiem tra toan bo thuoc tinh va phuong thuc newImg
console.dir(newImg);

// Bước 2: set attribute
// Cách 1:
newImg.setAttribute("src", "./assets/img/most_slide_2.jpg");

// Cách 2:
newImg.src = "./assets/img/most_slide_2.jpg";

// Bước 3: Thêm vào phần tử đã có sẵn
document.body.append(newImg); // Thêm vào cuối phần tử cha (Trong TH này là body)

newImg.style.width = "100vw";

// VD2: Thêm thẻ p
const newText = document.createElement("p"); // Bước 1: tạo element

newText.textContent = "Xin chao, em dang hoc JS"; // Bước 2: set attribute

document.body.append(newText);

// VD3: Thêm vào 1 phần tử khác
const p = document.querySelector(".hero__desc");

p.append("Sông cầu nước chảy lơ thơ, có đôi trai gái ngồi hơ quần đùi");

// VD4: Thêm nhiều phần tử vào cuối phần tử cha
// Tạo các phần tử mới
let elm1 = document.createElement("p");

elm1.textContent = "Đây là đoạn văn mới thêm";

let elm2 = document.createElement("span");

elm2.textContent = "Đây là thẻ span";

// Lấy phần tử cha
let container = document.querySelector(".hero__heading");

container.append(elm1, elm2, "Some more text");

// Prepend
// Nếu muốn thêm vào đầu của phần tử cha
container.prepend("Hi!");
