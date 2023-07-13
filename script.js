// ====================================Navigation bar======================
let country = document.getElementById('country');
let moving = document.getElementById('moving');
let text = document.getElementById('text');
let list = document.getElementById('list');
// let text = document.getElementById('');
country.addEventListener('click' ,() =>
{
list.classList.toggle('hidden');
moving.classList.toggle('roted')
});