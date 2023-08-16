var testiomnialData = [
  {
      avatar: "assets/3.jpeg",
      name: "Orji Christian ",
      review: "I recently attended the XYZ Tech Conference, and I must say, it exceeded all my expectations. "
  },
  {
      avatar: "assets/4.jpeg",
      name: "Enuma Kenechukwu",
      review: "he lineup of speakers was truly impressive, featuring industry experts and thought leaders who covered a wide range of topics. "
  },
  {
      avatar: "assets/5.jpeg",
      name: "Okenwa Chidubem ",
      review: "The keynote presentations were insightful and thought-provoking, offering a glimpse into the future of technology."
  },
  {
      avatar: "assets/6.jpeg",
      name: "Kevin-Chika Ikechukwu",
      review: "What impressed me the most was the level of engagement and interaction. The Q&A sessions after each talk allowed for direct interaction with the speakers"
  },
  {
      avatar: "assets/7.jpeg",
      name: "MBAKWE CHIZITERE",
      review: "The workshops and hands-on sessions were incredibly practical. I attended a coding workshop that taught advanced techniques, and the instructor was patient and knowledgeable. "
  },
  {
      avatar: "assets/8.jpeg",
      name: "OKEKE VITALIS",
      review: "The conference app was user-friendly and helped me keep track of the sessions I wanted to attend."
  }, {
      avatar: "assets/9.jpeg",
      name: "Nnachi Onyinyechi ",
      review: "One of the standout aspects was the diverse range of speakers and topics."
  },
  {
    avatar: "assets/10.jpeg",
    name: "Adindu Joshua",
    review: "It was inspiring to see a mix of genders, ethnicities, and backgrounds represented on stage. "
},
{
  avatar: "assets/11.jpeg",
  name: "OKEKE VALENTINE",
  review: "The talks covered not only cutting-edge technologies but also explored the ethical and societal implications, making for a well-rounded conference."
},]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.3,
  loop: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
      rotate: 0,
      depth: 800,
      slideShadows: true,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  autoplay: { delay: 5000 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
  if (window.innerWidth < 724) swiper.params.slidesPerView = 2
  if (window.innerWidth > 501) swiper.params.slidesPerView = 2
  if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
  if (window.innerWidth < 501) swiper.params.slidesPerView = 1
  swiper.update()
}