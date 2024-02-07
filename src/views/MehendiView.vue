<template>
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="logo-sidebar" class=" fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-periwinkle-50">
      <router-link to="/" class="flex items-center ps-2.5 mb-5">
         <img src="../assets/rings (1).png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Rameet <br>&<br> Gursavek</span>
      </router-link>
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src="../assets/henna (1).png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
               <span class="ms-3">Mehendi</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="../assets/punjabi.png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
               <span class="flex-1 ms-3 whitespace-nowrap">Jaggo</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="../assets/ladoo.png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
               <span class="flex-1 ms-3 whitespace-nowrap">Maiyan</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <img src="../assets/religion.png" class="h-6 me-3 sm:h-7" alt="kanda-icon" />
               <span class="flex-1 ms-3 whitespace-nowrap">Anand Karaj</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <img src="../assets/cheers.png" class="h-6 me-3 sm:h-7" alt="kanda-icon" />
               <span class="flex-1 ms-3 whitespace-nowrap">Reception</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
  <div class="about grid justify-items-center gap-20 sm:ps-56 ps-0">
    <!-- Switch to 2/3 in mobile -->
    <div class="rounded-xl bg-periwinkle-50  px-10 py-10 grid justify-items-center">
      <figure class="relative w-fit filter">
          <img class="rounded-xl" src="../assets/Ramy-Savek-1.jpg" alt="image description">
        <figcaption class="absolute rounded-xl parent-container top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-150 backdrop-blur-sm">
          <div class="font-bold md:text-6xl text-4xl pt-10 pb-5">Mehendi</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 md:text-2xl text-xl "></i>        
            <div class="md:text-2xl text-xl px-2">April 30th, 2024, 6:00 pm</div>
          </div>
          <button @click="toGoogleMaps(1)">
            <div class="flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center md:text-2xl text-xl "></i>
              <div class="md:text-2xl text-xl  px-2">Sandhu Residence<br>170 Summerwind Dr., Milpitas, CA, 95035</div>
            </div>
          </button>        
        </figcaption>
      </figure>   
      <!-- <div class="grid justify-items-center py-5">
      <div class="rounded-lg bg-periwinkle-500 w-fit py-5 px-5 grid justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.6125588988043!2d-121.91457042284414!3d37.44625653101409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc8c868c09fad%3A0xa016a9fd4b684426!2s170%20Summerwind%20Dr%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1707127238903!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div> -->
 
     
    </div>

    <div class="rounded-lg bg-periwinkle-50 w-fit px-10 py-10 grid justify-items-center">
      <figure class="relative w-fit transition-all duration-300 filter">
          <img class="rounded-lg" src="../assets/Ramy-Savek-11-1.jpg" alt="image description">
        <figcaption class="parent-container rounded-xl  absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold text-6xl pt-10 pb-5">Jaggo</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 text-2xl"></i>        
            <div class="text-2xl px-2">May 1st, 2024, 5:00 pm</div>
          </div>
          <button @click="toGoogleMaps(2)">
            
            <div class="flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="text-2xl px-2">Aria Dining & Banquets<br>212 Ranch Dr, Milpitas, CA 95035</div>
            </div>
          </button>
        </figcaption>
      </figure>   
    </div>

    <div class="rounded-lg bg-periwinkle-50 w-fit px-10 py-10 mx-2 grid justify-items-center">
      <figure class="relative w-fit transition-all duration-300 filter">
          <img class="rounded-lg" src="../assets/Ramy-Savek-4-1.jpg" alt="image description">
        <figcaption class=" parent-container  rounded-xl absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold text-6xl pt-10 pb-5">Maiyan</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 text-2xl"></i>        
            <div class="text-2xl px-2">May 2nd, 2024, 11:00 am</div>
          </div>
          <button @click="toGoogleMaps(1)">
            
            <div class="flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="text-2xl px-2">Sandhu Residence<br>170 Summerwind Dr., Milpitas, CA, 95035</div>
            </div>
          </button>
        </figcaption>
      </figure>   
    </div>

    <div class="rounded-lg bg-periwinkle-50 w-fit px-10 py-20 grid justify-items-center">
      <figure class="relative w-fit transition-all duration-300 filter">
          <img class="rounded-lg" src="../assets/Ramy-Savek-8-1.jpg" alt="image description">
        <figcaption class="parent-container rounded-xl absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold text-6xl pt-10 pb-5">Anand Karaj</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 text-3xl"></i>        
            <div class="text-2xl px-2">May 3rd, 2024<br>Arrival of Barat: 9:00 am<br>Milni & Tea: 10:00 am<br>Anand Karaj: 11:00 am<br>Lunch: 1:00 pm<br></div>
          </div>
          <button @click="toGoogleMaps(3)">
            
            <div class="flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="text-2xl px-2">San Jose Gurdwara<br>3636 Gurdwara Ave, San Jose, CA 95148</div>
            </div>
          </button>
        </figcaption>
      </figure>   
    </div>

    <div class="rounded-lg bg-periwinkle-50 w-fit px-10 py-10 grid justify-items-center">
      <figure class="relative w-fit filter">
          <img class="rounded-lg" src="../assets/Ramy-Savek-11-1.jpg" alt="image description">
        <figcaption class="parent-container rounded-xl absolute top-0 left-0 right-0 bottom-0 px-4 text-lg text-white flex flex-col justify-center backdrop-contrast-125 backdrop-blur-sm">
          <div class="font-bold text-6xl pt-10 pb-5">Reception</div>
          <div class="flex justify-center pt-3 px-5">
            <i class="bi bi-calendar text-periwinkle-50 text-2xl"></i>        
            <div class="text-2xl px-2">May 1st, 2024, 5:00 pm</div>
          </div>
          <button @click="toGoogleMaps(2)">
            
            <div class="flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-periwinkle-50 text-3xl grid content-center"></i>
              <div class="text-2xl px-2">Aria Dining & Banquets<br>212 Ranch Dr, Milpitas, CA 95035</div>
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
    }
  },
}
</script>

<style>
.parent-container {
  background-color: rgba(0, 0, 0, 0.3); /* Parent opacity */
  /* Additional styling for the parent container */
}
</style>
