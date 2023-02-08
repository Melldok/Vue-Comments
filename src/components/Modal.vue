<template>
    <div class="h-screen w-screen absolute bg-slate-300 bg-opacity-60 flex items-center justify-center" >
        <div class="w-6/12 h-5/6 bg-white rounded p-10 flex flex-col justify-between">
            
            <div class="flex justify-between">
                <div></div>
                <h2>Comentarios</h2>
                <img :src="cross" class="w-5 cursor-pointer" v-on:click="closeModal()">
            </div>
            <br>
            <hr>

            <div class=" mt-2 w-full h-4/5 overflow-scroll">
                
                <!-- Lista de mensajes -->

                <div v-for="mensaje in messages" >
                    <Mensaje :message="mensaje" />
                </div>

            </div>

      
            <form @submit.prevent="handleSubmit" class="flex mt-2 h-8">
                    <input 
                    v-model="newMessage"
                    type="text" 
                    placeholder="..."
                    class="bg-slate-100 w-full rounded-full p-5"
                >
                <button class="ml-2">
                    <img 
                    class="bg-blue-500 p-2 rounded-full cursor-pointer" :src="plane"
                    v-on:click="newMessage"
                    >
                </button>
                </form>
               
           
   
         

        
        </div>

    </div>
</template>

<script>

import cross from '../assets/cross.svg'
import plane from '../assets/plane.svg'
import {useModalStore} from '../stores/ModalStore'
import Mensaje from './Mensaje.vue'
import { ref } from "vue";

export default {

    
    components: {
        Mensaje
    },
    data: function(){
        return{
            cross: cross,
            plane: plane
        }
        
    },
    setup(){
        const ModalStore = useModalStore()
        const {messages} = ModalStore
        
        const newMessage = ref('')

        const formattedDate = () => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        const d = new Date;
        return d.toLocaleDateString('es-ES', options);
        }

        const handleSubmit = () => {
            if(newMessage.value.length > 0){
                ModalStore.addMessage({
                    id: 1,
                    msg: newMessage.value,
                    type: 'text',
                    date: formattedDate()
                })

                newMessage.value=''
            }
        }

        return {
            ModalStore, 
            messages,
            handleSubmit,
            newMessage
       
        }
    },
    methods: {
        closeModal(){
            this.ModalStore.closeModal()
        }
    }
}
</script>

