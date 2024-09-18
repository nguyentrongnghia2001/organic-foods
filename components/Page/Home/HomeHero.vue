<script lang="ts" setup>
  const listCriteria = ref<any[]>(
    [
      {
        number: '14k+',
        title: 'Product Varieties'
      },
      {
        number: '50k+',
        title: 'Happy Customers'
      },
      {
        number: '10+',
        title: 'Store Locations'
      },
    ]
  )
</script>
<template>
  <section
    style="
      background-image: url('images/banner-1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <div class="container">
      <div class="grid grid-cols-[1fr_1fr]">
        <div class="pt-5 mt-5">
          <h2 class="display-1 ls-1"><span class="fw-bold text-primary">Organic</span> Foods at your <span class="fw-bold">Doorsteps</span></h2>
          <p class="fs-4">Dignissim massa diam elementum.</p>
          <div class="d-flex gap-3">
            <NuxtLink to="#" class="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Start Shopping</NuxtLink>
            <NuxtLink to="#" class="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Join Now</NuxtLink>
          </div>
          <div class="grid grid-cols-[1fr_1fr_1fr] my-5">
            <div
              v-for="(item, index) in listCriteria" 
              :key="index"
            >
              <div class="text-dark">
                <div><p class="mb-0">{{item.number}}</p></div>
                <div><p class="text-uppercase mb-0">{{item.title}}</p></div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </section>
</template>