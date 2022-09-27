const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});


const labels = document.querySelectorAll(".label");
labels.forEach((label) => {
    label.addEventListener("click", () => {
        label.classList.toggle("active");
    });
});

const tabss = document.querySelectorAll(".tabs");
tabss.forEach((tabs) => {
    tabs.addEventListener("click", () => {
        tabs.classList.toggle("active");
    });
});


const mores = document.querySelectorAll(".more");
mores.forEach((mores) => {
    mores.addEventListener("click", () => {
        mores.classList.toggle("active");
    });
});


const sizes = document.querySelectorAll(".size");
sizes.forEach((sizes) => {
    sizes.addEventListener("click", () => {
        sizes.classList.toggle("active");
    });
});