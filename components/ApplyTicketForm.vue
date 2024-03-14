
<template>
  <div class="filter container mx-auto">
    <section class="home-container003 container mx-auto">
      <!-- tabs -->
      <div class="row tabpanel mx-5">
        <ul
          class="nav nav-tabs col-12 col-md-8 tablist"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item col-3" role="presentation">
            <button
              class="nav-link active flight text-white"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              FLIGHT
            </button>
          </li>
          <li class="nav-item col-3" role="presentation">
            <button
              class="nav-link hotel text-white"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              HOTEL
            </button>
          </li>
          <li class="nav-item col-3" role="presentation">
            <button
              class="nav-link package text-white"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              PACKAGE
            </button>
          </li>
          <li class="nav-item col-3" role="presentation">
            <button
              class="nav-link visa text-white"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#visa"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              VISA
            </button>
          </li>
        </ul>
        <div class="d-none d-md-block col-4"></div>
      </div>

      <!-- content -->
      <div class="tab-content d-flex flex-column mx-5" id="myTabContent">
        <!-- first content -->
        <div
          class="tab-pane fade show active bg-white"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <!-- first row -->
          <div class="container mb-3">
            <div class="row justify-content-around align-items-center">
              <div class="col-2 d-flex align-items-center gap-2 firstfilter">
                <input
                  type="radio"
                  name="radio"
                  class="home-radiobutton"
                  checked
                />
                <span class="home-text fw-bold">One-Way</span>
              </div>
              <div class="col-2 d-flex align-items-center gap-2 firstfilter">
                <input type="radio" name="radio" class="home-radiobutton1" />
                <span class="home-text fw-bold">Round-Trip</span>
              </div>

              <div class="col-2 d-flex align-items-center gap-2 firstfilter">
                <input type="radio" name="radio" class="home-radiobutton1" />
                <span class="home-text fw-bold">Multi-destination</span>
              </div>
              <select
                class="col-2 fw-bold economy home-text d-flex align-items-center gap-2 firstfilter bg-white"
              >
                <option value="Option 1">Economy</option>
                <option value="Option 1">Business</option>
                <option value="Option 2">First</option>
              </select>
              <div class="d-none d-md-block col-4"></div>
            </div>
          </div>

          <!-- forms -->
          <div class="container">
            <div class="row justify-content-between home-container017">
              <input
                type="text"
                placeholder="From"
                class="home-textinput input col-12 col-md-3"
              />
              <input
                type="text"
                placeholder="To"
                class="home-textinput1 input"
              />
              <ClientOnly>
                <div class="home-textinput2 input datepic col-12 col-md-3">
                  <VueDatePicker
                    input-class-name="dp-custom-input"
                    hide-input-icon
                    auto-apply
                    class="col-md-3 col-12 picker"
                    :enable-time-picker="false"
                    style="--dp-font-family: 'Inter',
              --dp-border: 'none',
              --dp-button-icon-height: 50px,
              "
                    v-model="picked"
                  />
                </div>
              </ClientOnly>

              <input
                type="text"
                readonly
                placeholder="Travelers "
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                class="home-textinput3 input dropdown-toggle col-md-3 col-12"
              />
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade bg-white"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div style="width: 100%; height: 100px">Hotel's Infomation</div>
        </div>
        <div
          class="tab-pane fade bg-white"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div style="width: 100%; height: 100px">Package's Infomation</div>
        </div>
        <div
          class="tab-pane fade bg-white"
          id="visa"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div style="width: 100%; height: 100px">Visa's Infomation</div>
        </div>
      </div>
      <div class="home-container027 me-5">
        <a
          href="fly-search"
          rel="noreferrer noopener"
          class="home-button02 button"
          >Destination Now →</a
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
const picked = ref(Date(new Date()));
</script>