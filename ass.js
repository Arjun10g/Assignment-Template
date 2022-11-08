const bg = document.querySelector('.bg');
const fname = document.querySelectorAll('.fname span');
const title = document.querySelector('.title h3');
let titlewidth = title.offsetWidth;
const q1 = document.querySelector('.q1');
const q1blur = document.querySelector('.q1 .blur');
const q2 = document.querySelector('.q2');
const q2blur = document.querySelector('.q2 .blur');
const answer = document.querySelector('.answer');
const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const xmark = document.querySelector('.xmark i');
xmark.style.opacity = 0;

// console.log(fname[0]);
// console.log(title.clientHeight, title.offsetHeight, title.clientWidth, title.offsetWidth);

// get computed style
let qbg = window.getComputedStyle(q1).getPropertyValue('background-color');

q1.addEventListener('mouseover', (e) => {
    q1.style.backgroundColor = 'rgba(255, 0, 0, 0.444)';
    q1blur.style.display = 'block';
    gsap.fromTo(q1blur, {scale:0.6}, {duration: 1.5, scale: 1.2, ease: 'power2.out', repeat: -1, yoyo: true});
});

q1.addEventListener('mouseout', (e) => {
    q1.style.backgroundColor = qbg;
    q1blur.style.display = 'none';
});

q2.addEventListener('mouseover', (e) => {
    q2.style.backgroundColor = 'rgba(255, 0, 0, 0.444)';
    q2blur.style.display = 'block';
    gsap.fromTo(q2blur, {scale:0.6}, {duration: 1.5, scale: 1.2, ease: 'power2.out', repeat: -1, yoyo: true});
});

q2.addEventListener('mouseout', (e) => {
    q2.style.backgroundColor = qbg;
    q2blur.style.display = 'none';
});

q1.addEventListener('click', (e) => {
    gsap.to(q1, {duration: 2, scale: 0.0001, ease: 'power2.out'});
    gsap.to(q2, {duration: 2, scale: 0.0001, ease: 'power2.out'});
    q1blur.style.display = 'none';
    q2blur.style.display = 'none';
    setTimeout(() => {
    q1.style.display = 'none';
    q2.style.display = 'none';
    answer.style.display = 'flex';
    a1.style.display = 'block';
    gsap.fromTo(answer, {scale:0.0001}, {duration: 2, scale:1, ease: 'power2.out'});
    gsap.fromTo(a1, {scale:0.0001}, {duration: 2, scale:1, ease: 'power2.out'});
    }, 2000);

    setTimeout(() => {
        xmark.style.opacity = 1;
    } , 4000);

});

q2.addEventListener('click', (e) => {
    gsap.to(q1, {duration: 2, scale: 0.0001, ease: 'power2.out'});
    gsap.to(q2, {duration: 2, scale: 0.0001, ease: 'power2.out'});
    q1blur.style.display = 'none';
    q2blur.style.display = 'none';
    setTimeout(() => {
    q1.style.display = 'none';
    q2.style.display = 'none';
    answer.style.display = 'flex';
    a2.style.display = 'block';
    gsap.fromTo(answer, {scale:0.0001}, {duration: 2, scale:1, ease: 'power2.out'});
    gsap.fromTo(a2, {scale:0.0001}, {duration: 2, scale:1, ease: 'power2.out'});
    }, 2000);
    setTimeout(() => {
        xmark.style.opacity = 1;
    } , 4000);
});

xmark.addEventListener('click', (e) => {
    gsap.to(answer, {duration: 2, scale: 0.0001, ease: 'power2.out'});
    setTimeout(() => {
        answer.style.display = 'none';
        a1.style.display = 'none';
        a2.style.display = 'none';
        q1.style.display = 'flex';
        q2.style.display = 'flex';
        gsap.fromTo(q1, {scale:0.0001}, {duration: 2, scale:1, ease: 'power2.out'});
        gsap.fromTo(q2, {scale:0.0001}, {duration: 2, scale:1, ease: 'power2.out'});
        xmark.style.opacity = 0;
    }, 2000);
});


// Where my entry animations go

let tl = gsap.timeline();
tl.fromTo(bg, {yPercent: -100}, {yPercent: 0, duration: 2});
tl.fromTo('.fname', {x: -titlewidth}, {x: 0,rotateX: 180, duration: 2});
tl.fromTo('.lname', {x: titlewidth}, {x: 0,rotateX: 180, duration: 2}, "<");
tl.fromTo('.title', {x: titlewidth}, {x: 0,rotateX: 180,  duration: 2}, "<");
tl.to('.fname', {rotateX:0, duration: 3},'>');
tl.to('.lname', {rotateX:0, duration: 3},'<');
tl.to('.title', {rotateX:0, duration: 3},'<');
tl.fromTo('.q1', {scale:0.0001}, {scale:1, duration: 2},'<');
tl.fromTo('.q2', {scale:0.0001}, {scale:1, duration: 2},'<');