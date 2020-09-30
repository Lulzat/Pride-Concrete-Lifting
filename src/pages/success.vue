<template>
  <Layout>
          <div class="w-full sm:w-1/2">
            <h2 class="font-bold tracking-widest text-2xl text-pride-blue hero-subtitle">Contact Form Submitted!</h2>
            <p class="font-bold tracking-widest text-1xl text-white hero-text">We will be in touch with you as soon as we are able. Thank you!</p>
          </div>
        </div>
      </div>
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
export default {
  data() {
    return {
      formData: {},
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
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.formData,
          }),
        })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error))
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
