<template>
  <div class="grid justify-center items-center pt-5 relative pb-20 mx-3">
    <div class="grid justify-center items-center bg-periwinkle-50 rounded-xl relative sm:p-0 p-4">       
      <!-- <transition name="fade" mode="ease-out"> -->
        <img class="transition sm:h-5/6 h-fit w-auto rounded-xl relative" style="animation-play-state: paused" id="countdowncardimg" :key="currentImage" :src="currentImage" alt="Image" />
      <!-- </transition> -->

   <!-- <section id="image-carousel" class="splide" aria-label="Beautiful Images">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
				<img src="../assets/Ramy-Savek-1.jpg" alt="">
			</li>
			<li class="splide__slide">
				<img src="../assets/Ramy-Savek-2.jpg" alt="">
			</li>
			<li class="splide__slide">
				<img src="../assets/Ramy-Savek-3.jpg" alt="">
			</li>
		</ul>
  </div>
</section> -->

      <div class=" absolute grid justify-items-center w-full h-32 ">
        <!-- Timer -->
        <div class="grid justify-center items-center bg-black text-4xl text-white parent-container sm:w-5/6 w-11/12 sm:py-4 py-1 backdrop-contrast-150 backdrop-blur-sm">
          <!-- <div class="font-medium sm:text-4xl text-2xl pb-3">You have no idea just how much I love you</div> -->
          <div class="sm:text-6xl text-4xl font-semibold grid grid-cols-5 sm:gap-2  gap-3">
           <div> {{formattedMonths}} </div> 
            <div> {{formattedDays}}</div>  
            <div> {{formattedHours}}</div>  
            <div> {{formattedMins}}</div>  
            <div> {{formattedSecs}} </div> 
            <div class="sm:text-3xl text-xl font-medium">Months</div>
            <div class="sm:text-3xl text-xl font-medium">Days</div>
            <div class="sm:text-3xl text-xl font-medium">Hours</div>
            <div class="sm:text-3xl text-xl font-medium">Mins</div>
            <div class="sm:text-3xl text-xl font-medium">Secs</div>
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
           require("../assets/Ramy-Savek-1.jpg"),
           require("../assets/Ramy-Savek-2.jpg"),
           require("../assets/Ramy-Savek-4-2.jpg"),
           require("../assets/Ramy-Savek-11.jpg"),
           require("../assets/Ramy-Savek-8-2.jpg"),
           require("../assets/Ramy-Savek-13-2.jpg"),
           require("../assets/Ramy-Savek-1.jpg"),
           require("../assets/Ramy-Savek-2.jpg"),
           require("../assets/Ramy-Savek-4-2.jpg"),
           require("../assets/Ramy-Savek-11.jpg"),
           require("../assets/Ramy-Savek-8-2.jpg"),
           require("../assets/Ramy-Savek-13-2.jpg"),

        ],
        currentImage: require("../assets/Ramy-Savek-1.jpg"),
        currentImageIndex: 0,
        targetDate: new Date('2024-04-30T18:00:00'), 
        formattedMonths: '',
        formattedDays: '',
        formattedHours: '',
        formattedMins: '',
        formattedSecs: '',
    };
  },
  methods: {
    
    async sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    webCycle() {
      // this.cycleImages();
      setInterval(this.cycleImages, 10000)
      // setInterval(this.animationtimer(), 9000)
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000);
    },
    cycleImages() {
      // const el = document.getElementById('countdowncardimg');
      // el.style.animationPlayState = 'running';
      console.log('cycleImages')
      // await this.sleep(8000);
      const index = this.images.indexOf(this.currentImage);
      this.currentImage = this.images[(index + 1) % this.images.length];

      // el.style.animationPlayState = 'paused';
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
.transition{
  animation: transition 3s linear;
  }
@keyframes transition {
  25% {
    opacity: 0;
  }
  50% {
    opacity: .35;
  }
  75% {
    opacity: .55;
  }
  100% {
    opacity: .85;
  }

}
</style>
