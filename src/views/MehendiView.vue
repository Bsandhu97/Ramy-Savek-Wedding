<template>
  <div class="about grid justify-items-center">
    <div class="rounded-lg bg-periwinkle-50 w-2/3 py-20">
      <div class="font-bold text-6xl pt-10 pb-5">Mehendi</div>
      <div class="flex justify-center pt-3 px-5">
        <i class="bi bi-calendar text-periwinkle-700 text-2xl"></i>        
        <div class="text-semibold text-2xl px-2">April 30th, 2024, 6:00 pm</div>
      </div>
      <button @click="toGoogleMaps()">
        
        <div class="flex justify-center pt-3 px-5">
          <i class="bi bi-geo-alt text-periwinkle-700 text-2xl"></i>
          <div class="text-semibold text-2xl px-2">170 Summerwind Dr., Milpitas, CA, 95035</div>
        </div>
      </button>
      <!-- <div class="grid justify-items-center py-5">
      <div class="rounded-lg bg-periwinkle-500 w-fit py-5 px-5 grid justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.6125588988043!2d-121.91457042284414!3d37.44625653101409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc8c868c09fad%3A0xa016a9fd4b684426!2s170%20Summerwind%20Dr%2C%20Milpitas%2C%20CA%2095035!5e0!3m2!1sen!2sus!4v1707127238903!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
   methods: {
    toGoogleMaps(){
      window.open('https://maps.app.goo.gl/sDdqDpawNEuqsbzx6', '_blank');
    }
  },
}
</script>
