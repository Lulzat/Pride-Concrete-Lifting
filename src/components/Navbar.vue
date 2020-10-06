<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">  
        <h1 class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
          PRIDE CONCRETE LIFTING
        </h1>
        <h3 class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white hidden md:block">contact@prideconcretelifting.com</h3>
        <a href="#contact"><button
          class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded-sm shadow hover:shadow-md hover:bg-pride-blue hover:text-gray-100 outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3"
          type="button" style="transition: all 0.15s ease 0s;">
          <i class="fas fa-envelope"></i>CONTACT US
        </button></a>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
