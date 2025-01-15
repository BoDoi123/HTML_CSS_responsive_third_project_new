let buttons = document.querySelectorAll(".btn");

for (let btn of buttons) {
    if (btn instanceof HTMLElement) {
        btn.style.backgroundColor = "blue";
        btn.innerHTML = "Click me";
        btn.style.fontSize = "2em";
        btn.style.color = "yellow";
    }
}

// Truy cập Parent, Child and Siblings
// Ví dụ:
let elm = document.querySelector(".hero__content");

// 1. Truy cap vao phan tu cha (Phan tu cha la duy nhat)
console.log(elm.parentElement);

// Doi mau nen cua the cha cua elm
// elm.parentElement.style.backgroundColor = "red";

// 2. Truy cap vao phan tu con (Phan tu con co the co nhieu)
console.log(elm.children); // Tra ve 1 HTMLCollection(3)

console.log(elm.children[0]);
console.log(elm.children[1]);
console.log(elm.children[2]);

// 3. nextElementSiblings: chon phan tu anh em ke tiep
console.log(elm.children[1].nextElementSibling);

// 4. previousElementSiblings: chon phan tu anh em truoc do
console.log(elm.children[1].previousElementSibling);
