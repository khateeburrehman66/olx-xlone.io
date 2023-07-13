// // ====================================Navigation bar======================
// let country = document.getElementById('country');
// let moving = document.getElementById('moving');
// let text = document.getElementById('text');
// let list = document.getElementById('list');
// // let text = document.getElementById('');
// country.addEventListener('click' ,() =>
// {
// list.classList.toggle('hidden');
// moving.classList.toggle('roted')
// });


  // ====================================Navigation bar======================
  let country = document.getElementById('country');
  let moving = document.getElementById('moving');
  let text = document.getElementById('text');
  let list = document.getElementById('list');

  country.addEventListener('click', () => {
      list.classList.toggle('hidden');
      moving.classList.toggle('roted');
  });

  function myfunction(onkar) {
      text.innerHTML = onkar;
  }

  let language = document.querySelector('.language');
  let hin_eng = document.querySelector('.hin-eng');

  language.addEventListener('click', () => {
      hin_eng.classList.toggle('display_div');
      // hin_eng.classList.toggle('h2525');
  });

  let h99=document.getElementById('h9');

// let engtag= document.getElelemntById('eng-tag');
 // let L5542=hin_eng.getElementsByTagName('li');

//         let L5542=h99.getElementsByTagName('li');
//         for(i=0;i<L5542.length;i++){
// L5542[i].addEventListener('click',function(){
//     engtag.textContent=this.textContent;
// })
//         }
let engtag=document.getElementById('eng-tag');
h99.addEventListener('click',(event)=>{
if(event.target.tagName === "LI"){
  engtag.textContent=event.target.textContent;
}
})

// hin_eng.addEventListener('click' , ()=> {
//     L5542 =hin_eng.value;
//     document.getElementById('eng-tag').innerHTML = L5542;
// })
  // function languageolx(anyone) {
  //     document.getElementById('eng-tag').innerHTML = anyone;
  // }
  let logo_id = document.getElementById('logo_id');
  let dropdownid = document.getElementById('dropdownid');
  logo_id.addEventListener('click', () => {
      dropdownid.classList.toggle("block_div");
  });

  // =====================ad1============
  let adimg = document.querySelector('.ad_img');
  let ad_imgicon = document.getElementById('ad_imgicon');

  ad_imgicon.addEventListener('click', () => {
      adimg.style = 'display:none';
  });
  //===============ad2===============
  let ad_imgicon1 = document.getElementById('ad_imgicon1');
  let adimg1 = document.querySelector('.ad_img1');
  ad_imgicon1.addEventListener('click', () => {
      adimg1.style = 'display:none';
  });
  //let load_more_products = document.getElementById('load_more_products_i');
  let load_more_products = document.querySelector('.load_more_products');
  let load_more = document.getElementById('load-more');
  load_more.addEventListener('click', () => {
      load_more_products.style = 'display:block';
      load_more.style = 'display:none';
  });
