<template>
  <div>
    <div class="fixed bottom-0 right-0 left-0 top-0 bg-gray-900 bg-opacity-50">
      <div class="p-4 bg-gray-200 rounded-lg shadow-lg mx-auto my-auto max-w-xl" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="flex flex-col h-64 overflow-y-scroll">
          <div v-for="(message, index) in messages" :key="message.id" 
               :class="[index % 2 === 0 ? 'ml-auto' : 'mr-auto', 'p-4 bg-white rounded-lg shadow-lg']">
            {{ message.text }}
          </div>
        </div>
        <div class="mt-4">
          <input v-model="newMessage" class="p-2 bg-gray-200 rounded-lg shadow-lg" type="text" placeholder="Type your message here">
          <button @click="sendMessage" class="ml-2 p-2 bg-gray-800 text-white rounded-lg shadow-lg">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import cross from '../assets/cross.svg'
import plane from '../assets/plane.svg'
import {useModalStore} from '../stores/ModalStore'
import Mensaje from './Mensaje.vue'

export default {
  setup() {
    
    const ModalStore = useModalStore()

    return {
      
      messages: ModalStore.messages,
      newMessage: '',
      sendMessage() {
        store.commit('addMessage', { text: this.newMessage })
        this.newMessage = ''
            }
        }
     },
    data: function(){
        return{
            cross: cross,
            plane: plane
        }
        
    },
    methods: {
        closeModal(){
            this.modalStore.closeModal()
        }
    },

  }

</script>
