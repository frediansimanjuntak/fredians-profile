<template>
  <div>
    <div class="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div class="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div class="flex flex-col items-center w-full gap-6 xl:flex-row">
          <div
            class="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800"
          >
            <img src="/images/user/FredianSimanjuntak.png" alt="user" />
          </div>
          <div class="order-3 xl:order-2">
            <h4
              class="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left"
            >
              Fredian Simanjuntak
            </h4>
            <div
              class="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">Software Developer</p>
              <div class="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Batam, Indonesia</p>
            </div>
          </div>
          <div class="flex items-center order-2 gap-2 grow xl:order-3 xl:justify-end">
            <a
              href="https://www.linkedin.com/in/fredian-simanjuntak/"
              target="_blank"
              rel="noopener"
              class="social-button"
            >
              <svg
                class="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.78381 4.16645C5.78351 4.84504 5.37181 5.45569 4.74286 5.71045C4.11391 5.96521 3.39331 5.81321 2.92083 5.32613C2.44836 4.83904 2.31837 4.11413 2.59216 3.49323C2.86596 2.87233 3.48886 2.47942 4.16715 2.49978C5.06804 2.52682 5.78422 3.26515 5.78381 4.16645ZM5.83381 7.06645H2.50048V17.4998H5.83381V7.06645ZM11.1005 7.06645H7.78381V17.4998H11.0672V12.0248C11.0672 8.97475 15.0422 8.69142 15.0422 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4505 5.94145 11.0672 8.46642L11.1005 7.06645Z"
                  fill=""
                />
              </svg>
            </a>
            <a
              href="https://github.com/frediansimanjuntak"
              target="_blank"
              rel="noopener"
              class="social-button"
            >
              <svg
                class="fill-current"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.3 3.44 21.8 8.2 23.39C8.8 23.5 9 23.13 9 22.82C9 22.54 8.99 21.78 8.99 20.88C5.66 21.6 4.97 19.38 4.97 19.38C4.42 18 3.63 17.63 3.63 17.63C2.54 16.9 3.71 16.92 3.71 16.92C4.92 17 5.56 18.16 5.56 18.16C6.63 19.97 8.37 19.46 9.05 19.16C9.16 18.38 9.47 17.86 9.81 17.56C7.15 17.26 4.34 16.2 4.34 11.47C4.34 10.12 4.82 9.02 5.62 8.16C5.49 7.86 5.07 6.64 5.74 4.99C5.74 4.99 6.75 4.67 8.99 6.17C9.96 5.9 11 5.77 12.03 5.77C13.06 5.77 14.1 5.9 15.07 6.17C17.31 4.67 18.32 4.99 18.32 4.99C18.99 6.64 18.57 7.86 18.44 8.16C19.24 9.02 19.72 10.12 19.72 11.47C19.72 16.21 16.9 17.25 14.23 17.55C14.66 17.92 15.04 18.65 15.04 19.79C15.04 21.42 15.03 22.38 15.03 22.82C15.03 23.13 15.23 23.5 15.84 23.39C20.6 21.8 24 17.3 24 12C24 5.37 18.63 0 12 0Z"
                  fill=""
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="isProfileInfoModal" @close="isProfileInfoModal = false">
      <template #body>
        <div
          class="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11"
        >
          <!-- close btn -->
          <button
            @click="isProfileInfoModal = false"
            class="transition-color absolute right-5 top-5 z-999 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-700 dark:bg-white/[0.05] dark:text-gray-400 dark:hover:bg-white/[0.07] dark:hover:text-gray-300"
          >
            <svg
              class="fill-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const isProfileInfoModal = ref(false)

const saveProfile = () => {
  // Implement save profile logic here
  console.log('Profile saved')
  isProfileInfoModal.value = false
}
</script>
