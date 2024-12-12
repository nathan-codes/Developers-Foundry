<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
   <header class="page_header">
      <div class="overlay">
        <nav class="navbar">
          <span class="logo">
            <a href="" class="logoText">rendzvous</a>
          </span>
          <ul class="nav_links_group hidden">
            <li class="navlink"><a href="">Discover</a></li>
            <li class="navlink"><a href="">About us</a></li>
            <li class="navlink"><a href="">FAQs</a></li>
            <li class="navlink"><a href="">Contact us</a></li>
          </ul>
          <span class="auth_buttons_group">
            <button class="login_button">Log in</button>
            <button class="signup_button">Sign Up</button>
          </span>
        </nav>
        <div class="banner_group">
          <h1 class="banner_title">
            Ready to Rock? Discover the Hottest Events Here - Your Calendar's
            New Best Friend!
          </h1>
        
          <div class="search_group">
            <form action="" class="form_group">
              <span class="search_input_group">
                <img
                  src="./assets/searchIcon.svg"
                  alt="search_icon"
                  class="search_icon"
                />
                <input
                  type="text"
                  class="search_input"
                  placeholder="Search for an event"
                />
              </span>

              <select name="event" id="" class="categories_dropdown">
                <option value="">Categories</option>
                <option value="">Entertainment</option>
                <option value="">Church</option>
                <option value="">Family</option>
                <option value="">Outdoor</option>
              </select>
              <button class="search_button">Search</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  
    <!-- <RouterView /> -->
  
  
  <main>
      <section>
        <div class="events_header_group">
          <h2 class="events_title text-[32px]">Trending events</h2>
          <span class="trending_events_link_group">
            <a href="" class="trending_events_link text-[16px]">
              View all trending events
            </a>
            <img
              src="./assets/icons8-diagonal-arrow-96.png"
              alt="diagonal_arrow_icon"
              class="diagonal_arrow_icon"
            />
          </span>
        </div>

        <div class="card_group" id="card_group">
          <article class="card">
            <img src="./assets/event1.jpg" alt="1evt" />
            <div class="card_body">
              <h3 class="card_title">ISWIS Live show</h3>
              <h4 class="card_date">Sun, Oct 3rd - 6pm</h4>
              <p class="card_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates consequuntur expedita architecto sit non? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Consequuntur,
                optio!
              </p>
              <div class="" style="display: inline-block">
                <span class="trending_events_link_group">
                  <a class="trending_events_link"> View details </a>
                  <img
                    src="./assets/icons8-diagonal-arrow-96.png"
                    class="diagonal_arrow_icon"
                    alt="diagonal_arrow_icon"
                  />
                </span>
              </div>
            </div>
          </article>
          <article class="card">
            <img src="./assets/event3.jpg" alt="1evt" />
            <div class="card_body">
              <h3 class="card_title">ISWIS Live show</h3>
              <h4 class="card_date">Sun, Oct 3rd - 6pm</h4>
              <p class="card_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates consequuntur expedita architecto sit non? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Consequuntur,
                optio!
              </p>
              <div class="" style="display: inline-block">
                <span class="trending_events_link_group">
                  <a class="trending_events_link"> View details </a>
                  <img
                    src="./assets/icons8-diagonal-arrow-96.png"
                    class="diagonal_arrow_icon"
                    alt="diagonal_arrow_icon"
                  />
                </span>
              </div>
            </div>
          </article>
          <article class="card">
            <img src="./assets/event2.jpg" alt="1evt" />
            <div class="card_body">
              <h3 class="card_title">ISWIS Live show</h3>
              <h4 class="card_date">Sun, Oct 3rd - 6pm</h4>
              <p class="card_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates consequuntur expedita architecto sit non? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Consequuntur,
                optio!
              </p>
              <div class="" style="display: inline-block">
                <span class="trending_events_link_group">
                  <a class="trending_events_link"> View details </a>
                  <img
                    src="./assets/icons8-diagonal-arrow-96.png"
                    class="diagonal_arrow_icon"
                    alt="diagonal_arrow_icon"
                  />
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

<section class="flex justify-between   p-[60px]">
  <div class="flex flex-col ">
<h2 class="text-[32px] font-[400] "> Discover a World of Events Tailored Just for You.</h2>
   

  <button class="signup_button block w-fit mt-3"  >View all events</button>
  </div> 

   <div class="flex flex-wrap gap-[30px] border">
<div class="hover:cursor-pointer   relative h-[240px] w-[421px] rounded-[10px] overflow-hidden flex justify-center items-center">
 <div class="absolute inset-0 bg-[url('../assets/rec3.jpg')] bg-cover bg-center"></div>
  <!-- Black Overlay -->
  <div class="absolute inset-0 bg-black opacity-50"></div>

  <div class="relative z-10 p-8 text-white">
    <h2 class="text-2xl">Physcial Events</h2>
  
  </div>
</div>
  <div class="hover:cursor-pointer   relative h-[240px] w-[421px] rounded-[10px] overflow-hidden flex justify-center items-center">
 <div class="absolute inset-0 bg-[url('../assets/rec3.jpg')] bg-cover bg-center"></div>
  <!-- Black Overlay -->
  <div class="absolute inset-0 bg-black opacity-50"></div>

  <div class="relative z-10 p-8 text-white">
    <h2 class="text-2xl">Hyrbid Events</h2>
  
  </div>
</div>


<div class="hover:cursor-pointer   relative h-[240px] w-[421px] rounded-[10px] overflow-hidden flex justify-center items-center">
<div class="absolute inset-0 bg-[url('../assets/rec3.jpg')] bg-cover bg-center"> </div>
<div class="absolute inset-0 bg-black opacity-50"></div>
<div class="relative z-10 p-8 text-white">
  <h2 class="text-2xl">Online Events</h2>
</div>
</div>








</div>
</section>

<footer class="text-white mt-10  aboslute bottom-0 w-full h-[343px] bg-[#432361]">
<main class="flex justify-between ">
  <section class="flex flex-col gap-3">
  <h1 class="text-[32px] font-semibold">rendzvous</h1>
        <p class="text-[16px] font-[300]">Your Personal Event Sherpa: Curating <br/> Awesome, One Click at a Time.</p>
 </section>
 <section class="flex gap-12">
<div class=" flex flex-col gap-2">
          <h3 class="font-semibold">Feature</h3>
            <p>Events discovery</p>
            <p>Ticketing</p>

        </div>
        <div class=" flex flex-col gap-2">
          <h3 class="font-semibold">Company</h3>
            <p>About us</p>
            <p>FAQS</p>
            <p>Careers</p>
            <p>Support</p>

        </div>
        <div class=" flex flex-col gap-2">
          <h3 class="font-semibold">Contact us</h3>
            <p>Info@events.com</p>
            <p>+23384 43343</p>
            <p>Race Course, 8/9 Marina,  <br> Onikan, Lagos Lagos, 4aa Force <br> Rd, Lagos Island 102273, Lagos</p>

        </div>
        
 </section>
</main>
</footer>

    
  </div>
</template>

<style scoped>

</style>
