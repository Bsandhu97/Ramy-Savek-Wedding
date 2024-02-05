<template>
  <div class="grid justify-center items-center pt-5 relative pb-20">
    <div class="grid justify-center items-center bg-periwinkle-50 rounded-xl relative">
      <img class="h-5/6 w-auto rounded-xl relative" src= "../assets/Ramy-Savek-1.jpg" alt="Cycling Background" />
      <div class=" absolute grid justify-items-center w-full h-32 ">
        <!-- Timer -->
        <div class="grid justify-center items-center bg-black text-4xl text-white parent-container w-5/6 py-3 backdrop-contrast-150 backdrop-blur-sm">
          <div class="font-medium text-4xl pb-3">You have no idea just how much I love you</div>
          <div class="text-6xl font-semibold grid grid-cols-5 gap-2">
           <div> {{formattedMonths}} </div> 
            <div> {{formattedDays}}</div>  
            <div> {{formattedHours}}</div>  
            <div> {{formattedMins}}</div>  
            <div> {{formattedSecs}} </div> 
            <div class="text-3xl font-medium">Months</div>
            <div class="text-3xl font-medium">Days</div>
            <div class="text-3xl font-medium">Hours</div>
            <div class="text-3xl font-medium">Mins</div>
            <div class="text-3xl font-medium">Secs</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        "../assets/Ramy-Savek-1.jpg",
        "../assets/Ramy-Savek-2.jpg",
        "../assets/Ramy-Savek-3.jpg",
      ],
      currentImage: "../assets/Ramy-Savek-1.jpg",
      imageIndex: 0,
      targetDate: new Date('2024-04-30T18:00:00'), 
      formattedMonths: '',
      formattedDays: '',
      formattedHours: '',
      formattedMins: '',
      formattedSecs: '',
    };
  },
  methods: {
    webCycle() {
      this.cycleImages();
      setInterval(this.cycleImages, 5000)
      
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000);
    },
    cycleImages() {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        this.currentImage = this.images[this.imageIndex];
    },
    updateCountdown() {
      const currentTime = new Date();
      const timeDifference = this.targetDate - currentTime;

      if (timeDifference > 0) {
       const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.formattedMonths = `0${months}`;
        this.formattedDays = (days < 10) ? `0${days}` : `${days}`;
        this.formattedHours = (hours < 10) ? `0${hours}` : `${hours}`;
        this.formattedMins =  (minutes < 10) ? `0${minutes}` : `${minutes}`;
        this.formattedSecs = (seconds < 10) ? `0${seconds}` : `${seconds}`;
      } else {
        //Count upwards
        // this.formattedTime = 'Countdown expired';
      }
    },
  },
  mounted() {
    this.webCycle();
  },
};
</script>

<style scoped>
.parent-container {
  background-color: rgba(0, 0, 0, 0.3); /* Parent opacity */
  /* Additional styling for the parent container */
}
</style>
