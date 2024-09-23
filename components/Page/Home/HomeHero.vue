<script lang="ts" setup>
import IconDelivery from '~/components/Icon/IconDelivery.vue';
import IconFresh from '~/components/Icon/IconFresh.vue';
import IconOrganic from '~/components/Icon/IconOrganic.vue';

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
  const listCriteria2 = ref<any[]>([
    {
      icon: IconFresh,
      title: 'Fresh from farm',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      color: 'var(--color-primary)'
    },
    {
      icon: IconOrganic,
      title: '100% Organic',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      color: 'var(--color-secondary)'
    },
    {
      icon: IconDelivery,
      title: 'Free delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipi elit.',
      color: 'var(--color-danger)'
    },
  ])
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
      <div class="grid sm:grid-cols-2 grid-cols-1">
        <div class="pt-12 mt-12">
          <h2 class="md:text-[80px] sm:text-[50px] text-[38px] tracking-[-0.04em]">
            <span class="text-primary sm:mr-4 mr-2">Organic</span> 
            <span class="font-normal sm:mr-4 mr-2">Foods at your</span>
            <span>Doorsteps</span>
          </h2>
          <p class="sm:text-[24px] text-[20px] text-[var(--color-gray)] sm:mt-4 sm:mb-8 mb-4">Dignissim massa diam elementum.</p>
          <div class="flex justify-start sm:gap-4 gap-2">
            <NuxtLink to="#" class="btn__hero bg-primary text-base sm:px-6 px-5 sm:py-4 py-4 hover:bg-danger opacity-100 hover:opacity-85">Start Shopping</NuxtLink>
            <NuxtLink to="#" class="btn__hero bg-dark text-base sm:px-6 px-5 sm:py-4 py-4 hover:bg-dark opacity-100 hover:opacity-85">Join Now</NuxtLink>
          </div>
          <div class="grid grid-cols-3 sm:my-5 py-3 sm:gap-4 gap-2 sm:pb-0 pb-4">
            <div
              v-for="(item, index) in listCriteria" 
              :key="index"
            >
              <div class="text-dark flex justify-start items-center lg:flex-nowrap flex-wrap lg:gap-4 md:gap-2 gap-0">
                <div><p class="mb-0 md:text-[28px] lg:text-[40px] text-[26px] font-bold lg:w-auto w-full">{{ item.number }}</p></div>
                <div><p class="uppercase mb-0 leading-[1.25] text-[16px]">{{ item.title }}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1">
        <div
          v-for="(item, index) in listCriteria2" 
          :key="index"
          :style="{ backgroundColor:item.color }"
        >
          <div class="text-[#ffffff] grid md:grid-cols-[1fr_3fr] grid-cols-1 p-6">
            <div>
              <component class="w-[60px] h-[60px] mx-auto" :is="item.icon" />
            </div>
            <div>
              <h5 class="text-[#ffffff] leading-[1.25] text-[20px] mb-2">{{ item.title }}</h5>
              <p class="leading-[1.5] text-[16px]">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .btn__hero{
    text-transform: uppercase;
    transition: all .15s ease-in-out;
    color: white;
    border-radius: 50rem;
  }
</style>