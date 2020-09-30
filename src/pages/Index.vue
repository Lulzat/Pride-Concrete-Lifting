<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    <!-- HEADER BEGIN -->
    <div class="header w-full min-h-screen flex flex-col justify-between">
      <!-- NAV BEGIN -->
      <nav
        class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow border-t-4 border-pride-red">
        <div
          class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
          <a href="" class="no-underline"><img src="/img/logo.png" alt="Pride Concrete Logo" class="h-12 py-1"></a>
          <button id="menuBtn" class="hamburger block sm:hidden focus:outline-none" type="button"
            onclick="navToggle();"><span class="hamburger__top-bun"></span><span
              class="hamburger__bottom-bun"></span></button>
        </div>
        <div id="menu"
          class="w-full sm:w-auto self-end sm:self-center hidden sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0">
          <!--<a class="text-gray-800 font-bold hover:text-pride-red text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1"
            href="#about">About</a>
          <a class="text-gray-800 font-bold hover:text-pride-red text-lg text-center w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1"
            href="#features">Service</a>
          <span id="follow"
            class="hidden sm:inline-block text-gray-800 font-bold hover:text-pride-red text-lg sm:w-auto sm:px-4 sm:py-1 cursor-pointer">Our
            Work</span>

          <a href=""
            class="text-gray-800 font-bold hover:text-pride-red text-lg text-center w-full no-underline sm:hidden py-2"
            target="_blank" rel="noopener"></a>-->

          <a class="text-gray-800 border border-indigo-800 text-lg bg-gray-100 rounded-full w-auto no-underline text-center sm:text-left hover:border-pride-red hover:text-pride-red hover:bg-white hover:shadow-md px-6 py-1 my-2 sm:my-0 sm:ml-4"
            href="#register">Get in Contact</a>
        </div>
      </nav>
      <!-- NAV END -->
      <div class="flex flex-col justify-center h-full py-12">
        <div class="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
          <div class="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8">
            <h1 class="tracking-wide text-pride-blue text-4xl mb-6 hero-title">
              PRIDE
              <span class="content__container block font-light text-pride-red text-4xl my-6">
                <ul class="content__container__list">
                  <li class="content__container__list__item xl:pl-3">CONCRETE</li>
                  <li class="content__container__list__item xl:pl-3">ASPHALT</li>
                  <li class="content__container__list__item xl:pl-3">HIGHWAY</li>
                  <li class="content__container__list__item xl:pl-3">DRIVEWAY</li>
                  <li class="content__container__list__item xl:pl-3">SIDEWALK</li>
                  <li class="content__container__list__item xl:pl-3">FOUNDATION</li>
                  <li class="content__container__list__item xl:pl-3">VOID FILL</li>
                </ul>
              </span>
              <span class="text-pride-blue font-bold tracking tracking-widest">LIFTING
              </span>
            </h1>
          </div>
          <div class="w-full sm:w-1/2">
            <h2 class="font-bold tracking-widest text-2xl text-pride-blue hero-subtitle">Concrete Lifting and
              Stabilization</h2>
            <p class="font-bold tracking-widest text-1xl text-white hero-text">Over 50 years of combined experience
              lifting concrete and asphalt. Whether you need a road, sidewalk, driveway, or any other concrete
              foundation raised - Pride Concrete Lifting will get the job done.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full justify-center pb-12">
        <a class="px-10 py-2 text-pride-blue bg-white shadow-md text-lg hover:bg-pride-blue hover:text-white hover:border-pride-red"
          href="#about">More Information</a>
      </div>
    </div>
    <!-- HEADER END -->

    <!-- ABOUT BEGIN -->
    <div id="about" class="w-full min-h-screen flex flex-col justify-center items-center py-12">
      <div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
        <h2 class="font-bold tracking-wider text-gray-800 text-4xl mb-6"></h2>
        <div class="font-light text-black text-xl">
          <h2 class="font-bold tracking-widest text-2xl text-pride-blue hero-subtitle">Experience in the Industry.
            Quality on the Job.</h2>
        </div>
        <p class="font-bold tracking-widest text-1xl text-black hero-text">Our team has been in the business of lifting
          concrete for a long time - over half a century! We have worked on everything from driveways to highways, and
          we have delivered quality results through scorching Texas Summers and the chilling wind of Winter.</p>
      </div>
      <!--<div class="flex flex-row w-full justify-center">
        <a class="px-10 py-2 text-gray-200 bg-pride-red shadow-md text-lg hover:bg-gray-800 hover:border-red"
          href="#features">See How it Works</a>-->
      </div>
    </div>
    <!-- ABOUT END -->

    <!-- FEATURES BEGIN
    <div id="features" class="w-full min-h-screen flex flex-col justify-center items-center bg-indigo-800 py-12">
      <div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0">
        <h2 class="tracking-wide text-pride-red font-bold text-4xl mb-6"></h2>
        <div class="font-light text-gray-200 text-xl mb-6">

        </div>
      </div>
      <div class="self-center w-full xl:w-4/5 flex flex-col sm:flex-row flex-wrap px-4 xl:px:0">

        <div
          class="w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-indigo-600 px-4 sm:px-8 py-6 sm:py-12">
          <div class="w-1/3 xl:w-1/4">
            <img src="" alt="" class="w-16 block sm:mx-auto">
          </div>
          <div class="w-2/3 xl:w-3/4">
            <h3 class="tracking-wide text-pride-red font-bold text-2xl mb-4"></h3>
            <div class="font-light text-gray-200 text-lg">

            </div>
          </div>
        </div>

      </div>
      <div class="self-center text-center w-full sm:w-1/3 px-4 sm:px:0">
        <h3 class="font-bold tracking-widest text-pride-red text-2xl my-6"></h3>
      </div>
      <div class="flex flex-row w-full justify-center pt-6">
        <a class="px-10 py-2 text-gray-200 bg-pride-red rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
          href="#register">Register Now</a>
      </div>
    </div>
    FEATURES END -->

    <!-- REGISTER BEGIN -->
    <div id="register" class="w-full min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <div class="self-center text-center w-full xl:w-1/3 px-4 sm:px:0">
           <form class="form bg-white p-6 my-10 relative"
          name="PrideForm"
          id="myForm"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          enctype="application/x-www-form-urlencoded"
          @submit.prevent="handleFormSubmit">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <h3 class="text-2xl text-gray-900 font-semibold font-sans">Get in Contact</h3>
          <p class="text-gray-600 font-sans">And We'll Handle The Rest</p>
          <div class="flex space-x-5 mt-3">
            <input type="text" name="name" id="name" placeholder="Your Name" class="border p-2  w-1/2 font-sans" v-model="formData.userName">
            <input type="tel" name="telephone" id="telephone" placeholder="Phone Number" class="border p-2 w-1/2 font-sans" v-model="formData.userPhone">
          </div>
          <input type="email" name="email" id="email" placeholder="Your Email" class="border p-2 w-full mt-3 font-sans" v-model="formData.userEmail">
          <textarea name="message" id="message" cols="10" rows="3" placeholder="What do you need lifted?"
            class="border p-2 mt-3 w-full font-sans" v-model="formData.userMessage"></textarea>
          <input type="submit" value="Submit"
            class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3 font-sans">
        </form>
      </div>
    </div>
    <!-- REGISTER END -->

    <!-- FOOTER BEGIN -->
    <footer class="w-full flex flex-col sm:flex-row sm:justify-center text-lg tracking-wide px-4 sm:px-0 py-16">

      <div class="w-full">
        <span class="block text-center text-gray-800 text-sm font-light">
          &copy; PRIDE CONCRETE LIFTING 2020
        </span>
      </div>
    </footer>
    <!-- FOOTER END -->
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import axios from "axios";

export default {
 data() {
        return {
            formData: {
                userName: null,
                userPhone: null,
                userEmail: null,
                userMessage: null,
            },
        }
    },
  metaInfo: {
    title: "Pride Concrete Lifting | Lift & Stabilize"
  },
  methods: {
    navToggle() {
      var btn = document.getElementById('menuBtn');
      var nav = document.getElementById('menu');

      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    },
    encode(data) {  
            const formData = new FormData();
            
            for (const key of Object.keys(data)) {
                formData.append(key, data[key]);
            }
            
            return formData;
        },

        handleFormSubmit(e) {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
            };

            axios.post(
                location.href, 
                this.encode({
                    'form-name': e.target.getAttribute("name"),
                    ...this.formData,
                }),
                axiosConfig
            )
            .then(data => console.log(data))
            .catch(error => console.log(error))
            .then(document.getElementById("myForm").innerHTML = `
            <div>
                Contact Form Successfully Submitted!
            </div>
            `)
        }
  }
  };
</script>

<style>
    .header {
      background: url("/img/hero-image.jpg"), linear-gradient(135deg, rgba(245, 247, 250, 1) 0%, #fff 20%, #fff 80%, rgba(245, 247, 250, 1) 100%);
      background-position: calc(75% - 75px) 75%;
    }

    .hero-title {
      font-family: 'Coda Caption', sans-serif;
    }

    .hero-subtitle {
      font-family: 'Montserrat', sans-serif;
    }

    .hero-text {
      font-family: 'Montserrat', sans-serif;
    }

     .icon::after{
  content: '';
  display: block;
  position: absolute;
  border-top: 23px solid transparent;
  border-bottom: 17px solid transparent;
  border-left: 12px solid #3182ce;
  left: 100%;
  top: 0;
}

    .content__container {
      overflow: hidden;
      height: 40px;
    }

    .content__container__list {
      list-style: none;

      animation-name: change;
      animation-duration: 20s;
      animation-iteration-count: infinite;
    }

    .content__container__list__item {
      margin: 0;
      line-height: 40px;
    }

    @keyframes change {

      0%,
      7.14%,
      100% {
        transform: translate3d(0, 0, 0);
      }

      14.28% {
        transform: translate3d(0, -14.28%, 0);
      }

      21.42% {
        transform: translate3d(0, -28.57%, 0);
      }

      28.57% {
        transform: translate3d(0, -42.85%, 0);
      }

      35.71% {
        transform: translate3d(0, -57.14%, 0);
      }

      42.85% {
        transform: translate3d(0, -71.42%, 0);
      }

      53.5% {
        transform: translate3d(0, -85.71%, 0);
      }

      64.28% {
        transform: translate3d(0, -71.42%, 0);
      }

      71.42% {
        transform: translate3d(0, -57.14%, 0);
      }

      78.54% {
        transform: translate3d(0, -42.85%, 0);
      }

      85.71% {
        transform: translate3d(0, -28.57%, 0);
      }

      92.85% {
        transform: translate3d(0, -14.28%, 0);
      }
    }
</style>
