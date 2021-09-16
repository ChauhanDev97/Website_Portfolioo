
const menu = document.querySelector('#menu');
const fnav = document.querySelector('#fnav');
const close = document.querySelector('#fclose');

menu.addEventListener('click', function(){
    fnav.style.right ='0'
});

close.addEventListener('click',function(){
    fnav.style.right = '-100%'
});

var tl = gsap.timeline();

tl.from('nav', {
    width: 0,
    opacity : 0,
    ease : Expo.easeInOut,
    duration : 15
})

tl.from('#one', {
    height: 0,
    opacity : 0,
    ease : Expo.easeInOut,
    duration : 11
}, '-=11')


// .from('#one', {
//     height: 0,
//     opacity : 0,
//     y :30,
//     ease : Expo.easeInOut,
//     duration : 11
// }, '-=11')

// .from('#one', {
//     height: 0,
//     opacity : 0,
//     y :30,
//     ease : Expo.easeInOut,
//     duration : 11
// }, '-=11')

