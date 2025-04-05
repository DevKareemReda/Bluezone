let allServices = document.querySelectorAll(".services");
let boxServ = document.querySelector(".box-serv")
let descServ = document.querySelector(".desc-serv")
const servicesData = [
    {
    id: 1,
    images: "images/ecommerce.png",
    title: 'e-Commerce',
    categroy: "eCommerce",
    desc: [
      "We provide comprehensive eCommerce solutions to help you set up, manage, and scale your online store. Our services include custom online store development, payment gateway integration, inventory management, secure transactions, and more, all designed to meet the needs of your business.",
      "The electronic headquarters is the headquarters of your company or your electronic activity online. In order to help your customers reach you at the lowest cost and effort.",
      "The website helps you introduce the company and services That you provide to customers.",
      "Bluezone Company can help you In designing and creating a website that matches the identity of the company and the services it provides."
    ]
  },
  {
    id: 2,
    images: "images/hosting.png",
    title: 'Web Hosting',
    categroy: "hosting",
    desc: [
      "Our Web Hosting solutions provide reliable, scalable platforms designed to deliver optimal performance, robust security, and 99.9% uptime. Whether you’re launching a personal blog, running a dynamic business website, or managing a growing e-commerce store, our hosting services offer unmatched flexibility. We tailor each hosting package to your specific needs, ensuring seamless scalability as your site grows.",
      "The website is the first step to launching your business Professionally electronic to reach more customers on your site.",
      "The electronic headquarters is the headquarters of your company or your electronic activity online. In order to help your customers reach you at the lowest cost and effort.",
      "The website helps you introduce the company and services That you provide to customers.",
      "Bluezone Company can help you In designing and creating a website that matches the identity of the company and the services it provides."
    ]
  },
  {
    id: 3,
    images: "images/marketing.png",
    title: 'Marketing',
    categroy: "marketing",
    desc: [
      "In today’s digital world, effective marketing is key to growing your business and reaching the right audience. Our marketing services are designed to help you build a strong online presence, engage your customers, and drive meaningful results. From strategy development to execution, we tailor our services to meet your unique needs.",
      "Bluezone provides comprehensive, professional e-marketing, whether for mobile applications or electronic accounts on Instagram, YouTube, Twitter, and also Facebook.",
      "Bluezone professionally introduces you to the world of electronic marketing to market your product through social media sites.",
      "We photograph your product, create special accounts, channels, and advertising campaigns for you, and we also design a mobile application for you so that you can be at the heart of the world of electronic marketing via the Internet.",
      "We do not have specialists, but we have experts in electronic marketing to reach the desired customer wherever he is through different marketing methods",
      "Based in Kuwait and the Arab world.. Bluezone is with you wherever you are."
    ]
  },
  {
    id: 4,
    images: "images/technical.png",
    title: 'Technical Supported',
    categroy: "technical",
    desc: [
      "We understand that technical issues can arise at any time, which is why we offer round-the-clock support to keep your business running smoothly. Our dedicated team of experts is available 24/7 to provide prompt, reliable assistance whenever you need it.",
      "BBluezone works to provide adaptive - modifying the system to adapt to changes in the software environment (DBMS, operating system).",
      "Optimization - Implementation of new or changed user requirements related to software functional improvements.",
      "Corrective - Diagnosing and fixing errors, some of which users may find.",
      "Preventive - Increase software maintenance and reliability to prevent future problems.",
    ]
  },
  {
    id: 5,
    images: "images/app.png",
    title: 'Application',
    categroy: "app",
    desc: [
      "Our Application Development services are designed to help businesses transform their ideas into fully functional, user-friendly mobile or web applications. Whether you're looking to create a custom solution for your business or develop an innovative app for your customers, we provide end-to-end development that ensures high performance, scalability, and a seamless user experience.",
      "Bluezone provides you with an app that has more intuitive design options, a better user experience and helps increase conversion rates.",
      "If your app has an easy-to-use user interface, users of your app will feel accomplished by completing tasks quickly, and it will help them feel connected to your app.",
    ]
  },
  {
    id: 6,
    images: "images/web.png",
    title: 'Web Design',
    categroy: "web",
    desc: [
      "We specialize in creating custom, user-friendly websites that not only look great but also perform seamlessly. Whether you're looking for a sleek, modern design or a powerful, feature-rich platform, our web design and development services are tailored to meet your specific needs.",
      "The website is the first step to launching your business Professionally electronic to reach more customers on your site.",
      "The electronic headquarters is the headquarters of your company or your electronic activity online. In order to help your customers reach you at the lowest cost and effort.",
      "The website helps you introduce the company and services That you provide to customers.",
      "Bluezone Company can help you In designing and creating a website that matches the identity of the company and the services it provides."
    ]
  },
]

// let html = "";
// servicesData.find(items => {
//   let html = `
//     <div class="col-6 col-sm-4 active">
//     <div class="service-img" data-tab=${items.categroy}>
//     <img src=${items.images} class="img-fluid" alt="Not Found">
//     </div>
//     </div>
//   `
//   boxServ.innerHTML += html;
// })

// servicesData.find(items => {
//   let html = `
//     <div class="service-details ${items.categroy}">
//       <h3 class="mb-3">${items.title}</h3>
//       <p class="mb-2">${items.desc[0]}</p>
//       <a href="services.html?title=${title = items.title.split(" ", 2).join("/")}"class="btn btn-primary mt-4">view details</a>
//     </div>
//   `
//   descServ.innerHTML += html;
//   document.querySelectorAll(".service-details")[0].classList.add("active")
// })

// ! ================== tab services ==================
let serviceImg = document.querySelectorAll(".service-img");
let serviceDetails = document.querySelectorAll(".service-details");
serviceImg[0].classList.add("active")
serviceImg.forEach((items) => {
  items.onclick = function () {
    serviceImg.forEach((items) => {
      items.classList.remove("active");
    });
    items.classList.add("active");
    const targetTab = "." + this.getAttribute("data-tab");
    serviceDetails.forEach((items) => items.classList.remove("active"));
    document.querySelector(targetTab).classList.add("active");
  };
});

// ! ================== increment counter when scroll top ==================
let counterSection = document.querySelector(".counter-section");
let counterTag = document.querySelectorAll(".counter-section h2");
let stopCounter = false;
let speed = 1300;
function incrementCounter() {
  if (
    this.scrollY >= counterSection.offsetTop - 200 &&
    this.scrollY <= counterSection.offsetTop + counterSection.offsetHeight
  ) {
    counterTag.forEach((el) => counter(el));
  }
}
window.addEventListener("loading", incrementCounter);
window.addEventListener("scroll", incrementCounter);
function counter(el) {
  setInterval(() => {
    let target = Number(el.getAttribute("data-count"));
    let numContent = Number(el.textContent);
    let increase = target / speed;
    if (target > numContent) {
      el.textContent = Math.ceil(increase + numContent);
    }
  });
}