<template>
    <div class="flex justify-center items-center h-screen">
        <div class="rounded-lg bg-periwinkle-50 shadow-md px-8 pt-6 pb-8 mb-4 md:w-4/6 md:h-4/6 w-5/6 h-5/6">
            <div class="font-bold md:text-6xl text-4xl pt-10 pb-5">{{event}}</div>
            <div class="flex justify-center py-5 px-5">
                <div class="md:text-3xl text-2xl px-2 md:w-4/5">{{eventDescription}}</div>
            </div>
            <div class="flex justify-center py-3 px-5">
                <i class="bi bi-calendar md:text-2xl text-xl"></i>        
                <div class="md:text-2xl text-xl px-2">{{eventDate}}, {{eventTime}}</div>
            </div>
            <div class=" hover:text-periwinkle-300 flex justify-center pt-3 px-5">
              <i class="bi bi-geo-alt text-3xl grid content-center "></i>
              <div class="md:text-2xl text-xl  px-2">{{eventLocation}}<br>{{eventAddress}}</div>
            </div>
            <div class="rounded-lg hover:text-periwinkle-300 flex justify-center pt-3 px-5">
                <GMapMap
                    :center="center"
                    :zoom="7"
                    map-type-id="terrain"
                    style="width: 500px; height: 300px"
                >
        
                </GMapMap>
            </div>
 
        </div>
  </div>
</template>

<script>
// import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  data() {
    return {
      event: 'Mendhi Celebration',
      eventDate: 'April 30th, 2024',
      eventTime: '6:00 pm Onwards',
      eventLocation: 'Sandhu Residence',
      eventAddress: '170 Summerwind Drive, Milpitas, CA, 95035',
      eventDescription: 'The Sandhu Family cordially invites you to the Mendhi celebration for the wedding of Rameet Kaur Sandhu',
      center: { lat: 40.689247, lng: -74.044502 }
    };
    

    
  },
}
</script>

<style>
.parent-container {
  background-color: rgba(0, 0, 0, 0.3);
}

#app {
  position: relative;
  overflow: hidden;
}

gmp-map {
    height: 100%;
}

html,body {
    height: 100%;
    margin: 0;
    padding: 0;
}

</style>



 
 