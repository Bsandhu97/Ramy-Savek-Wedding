<template>
  <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="grid px-6 py-3 pt-5  ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>
  <aside id="default-sidebar"  class="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-periwinkle-50">
        <router-link to="/" class="flex items-center ps-2.5 mb-5">
          <img src="../assets/rings (1).png" class="h-6 me-3 sm:h-7" alt="rings-icon" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Rameet <br>&<br> Gursavek</span>
        </router-link>
        <ul class="space-y-2 font-medium">
          <li>
              <a @click="scrollToSection('mehendi')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img src="../assets/henna (1).png" class="h-6 me-3 sm:h-7" alt="henna-icon" />
                <span class="flex-1 ms-3 whitespace-nowrap">Mehendi</span>
              </a>
          </li>
          <li>
              <a @click="scrollToSection('jaggo')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img src="../assets/punjabi.png" class="h-6 me-3 sm:h-7" alt="tol-icon" />
                <span class="flex-1 ms-3 whitespace-nowrap">Jaggo</span>
              </a>
          </li>
          <li>
              <a @click="scrollToSection('maiyan')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img src="../assets/ladoo.png" class="h-6 me-3 sm:h-7" alt="laddo-icon" />
                <span class="flex-1 ms-3 whitespace-nowrap">Maiyan</span>
              </a>
          </li>
          <li>
              <a @click="scrollToSection('anandkaraj')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img src="../assets/religion.png" class="h-6 me-3 sm:h-7" alt="kanda-icon" />
                <span class="flex-1 ms-3 whitespace-nowrap">Anand Karaj</span>
              </a>
          </li>
          <li>
              <a @click="scrollToSection('reception')" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img src="../assets/cheers.png" class="h-6 me-3 sm:h-7" alt="champagne-icon" />
                <span class="flex-1 ms-3 whitespace-nowrap">Reception</span>
              </a>
          </li>
        </ul>
    </div>
  </aside>
  <div class="about grid justify-items-center sm:gap-20 gap-10 sm:ps-56 ps-0">
    <!-- Switch to 2/3 in mobile -->
    <div id="mehendi" class="rounded-xl bg-periwinkle-50 sm:px-10 sm:py-10 py-4 px-3 mx-5 sm:mt-10 mt-3 grid justify-items-center">
      <figure class="relative w-fit filter">
          <img class="rounded-xl sm:block hidden" src="../assets/Ramy-Savek-6.jpg" alt="image description">
          <img class="rounded-xl sm:hidden block" src="../assets/Ramy-Savek-1.jpg" alt="image description">

        <figcaption class="absolute rounded-xl parent-container top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-150 backdrop-blur-sm">
          <div class="font-bold md:text-6xl text-4xl pt-10 pb-5">Mehendi</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 md:text-2xl text-xl "></i>        
            <div class="md:text-2xl text-xl px-2">April 30th, 2024, 6:00 pm</div>
          </div>
          <button @click="toGoogleMaps(1)">
            <div class=" hover:text-periwinkle-300 flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center "></i>
              <div class="md:text-2xl text-xl  px-2">Sandhu Residence<br>170 Summerwind Dr., Milpitas, CA, 95035</div>
            </div>
          </button>        
        </figcaption>
      </figure>   
    </div>

    <div id="jaggo" class="rounded-lg bg-periwinkle-50 w-fit sm:px-10 sm:py-10 py-4 px-3 mx-5 grid justify-items-center">
      <figure class="relative w-fit transition-all duration-300 filter">
          <img class="rounded-xl sm:block hidden" src="../assets/Ramy-Savek-11-1.jpg" alt="image description">
          <img class="rounded-xl sm:hidden block" src="../assets/Ramy-Savek-1.jpg" alt="image description">        <figcaption class="parent-container rounded-xl  absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold md:text-6xl text-4xl pt-10 pb-5">Jaggo</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 text-2xl"></i>        
            <div class="md:text-2xl text-xl px-2">May 1st, 2024, 5:00 pm</div>
          </div>
          <button @click="toGoogleMaps(2)">
            
            <div class=" hover:text-periwinkle-300 flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="md:text-2xl text-xl px-2">Aria Dining & Banquets<br>212 Ranch Dr, Milpitas, CA 95035</div>
            </div>
          </button>
        </figcaption>
      </figure>   
    </div>

    <div id="maiyan" class="rounded-lg bg-periwinkle-50 w-fit sm:px-10 sm:py-10 py-4 px-3 mx-5 grid justify-items-center">
      <figure class="relative w-fit transition-all duration-300 filter">
          <img class="rounded-xl sm:block hidden" src="../assets/Ramy-Savek-4-1.jpg" alt="image description">
          <img class="rounded-xl sm:hidden block" src="../assets/Ramy-Savek-1.jpg" alt="image description">        <figcaption class=" parent-container  rounded-xl absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold md:text-6xl text-4xl pt-10 pb-5">Maiyan</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 text-2xl"></i>        
            <div class="md:text-2xl text-xl px-2">May 2nd, 2024, 11:00 am</div>
          </div>
          <button @click="toGoogleMaps(1)">
            
            <div class="hover:text-periwinkle-300 flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="md:text-2xl text-xl px-2">Sandhu Residence<br>170 Summerwind Dr., Milpitas, CA, 95035</div>
            </div>
          </button>
        </figcaption>
      </figure>   
    </div>
    <!-- py-2 px-2 mx-1 SM mobile -->
    <div id="anandkaraj" class="rounded-lg bg-periwinkle-50 w-fit sm:px-10 sm:py-10 py-4 px-3 mx-5 grid justify-items-center">
      <figure class="relative w-fit transition-all duration-300 filter">
        <img class="rounded-xl sm:block hidden" src="../assets/Ramy-Savek-8-1.jpg" alt="image description">
        <img class="rounded-xl sm:hidden block" src="../assets/Ramy-Savek-1.jpg" alt="image description">        
        <figcaption class="parent-container rounded-xl absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold md:text-6xl text-4xl pt-10 pb-5">Anand Karaj</div>
          <div class="flex justify-center pt-0 px-0">
            <i class="bi bi-calendar text-periwinkle-50 text-1xl"></i>        
            <div class="md:text-2xl text-xl px-2">May 3rd, 2024<br>Arrival of Barat: 9:00 am<br>Milni & Tea: 10:00 am<br>Anand Karaj: 11:00 am<br>Lunch: 1:00 pm<br></div>
          </div>
          <button @click="toGoogleMaps(3)">
          
            <div class="hover:text-periwinkle-300 flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="md:text-2xl text-xl px-2">San Jose Gurdwara<br>3636 Gurdwara Ave, San Jose, CA 95148</div>
            </div>
          </button>
        </figcaption>
      </figure>   
    </div>

    <div id="reception"  class="rounded-lg bg-periwinkle-50 w-fit sm:px-10 sm:py-10 py-4 px-3 mx-5 grid justify-items-center">
      <figure class="relative w-fit filter">
        <img class="rounded-xl sm:block hidden" src="../assets/Ramy-Savek-11-1.jpg" alt="image description">
        <img class="rounded-xl sm:hidden block" src="../assets/Ramy-Savek-1.jpg" alt="image description">        
        <figcaption class="parent-container rounded-xl absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold md:text-6xl text-4xl pt-10 pb-5">Reception</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 text-2xl"></i>        
            <div class="md:text-2xl text-xl px-2">May 1st, 2024, 5:00 pm</div>
          </div>
          <button class="" @click="toGoogleMaps(2)">
            
            <div class="hover:text-periwinkle-300 flex justify-center pt-3 px-5 ">
              <i id="locationReception" class="hover:text-periwinkle-300 bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="md:text-2xl text-xl px-2">Aria Dining & Banquets<br>212 Ranch Dr, Milpitas, CA 95035</div>
            </div>
          </button>
      </figcaption>
    </figure>   
  </div>
</div>
</template>

<script>

export default {
   methods: {
    toGoogleMaps(value){
      if(value == 1){
          window.open('https://maps.app.goo.gl/sDdqDpawNEuqsbzx6', '_blank');
      }
      else if(value == 2){
         window.open('https://maps.app.goo.gl/GSRmjQe39FZbTGDb8', '_blank');
      }
      else if(value == 3){
        window.open('https://maps.app.goo.gl/ET7avNXAzW713PKo6', '_blank'); 
      }
    },
    toggleSideBar() {
      const sidebar = document.getElementById('default-sidebar');
      sidebar?.classList.toggle('-translate-x-full');
    },
    scrollToSection(section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    },
    mouseHoverEvent(id) {
      console.log('hovered');
      if(!id) return;
      const element = document.getElementById(id);

      
        if(element?.classList.contains('text-periwinkle-300')) {
          element?.classList.remove('text-periwinkle-300');
          element?.classList.add('text-periwinkle-50');
        }
        else if(element?.classList.contains('text-periwinkle-50')){
          element?.classList.add('text-periwinkle-300');
        }
   
        
    },
  },
}
</script>

<style>
.parent-container {
  background-color: rgba(0, 0, 0, 0.3); /* Parent opacity */
  /* Additional styling for the parent container */
}
</style>
