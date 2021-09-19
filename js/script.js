window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const list = document.querySelectorAll('.nav-link');
function activeLink() {
    list.forEach((x) => x.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((x) => x.addEventListener('click', activeLink));