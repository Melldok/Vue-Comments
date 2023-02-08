<template>
    
    <div class="message">
         <!-- Aplica el estilo dependiendo de los datos que lleguen al componente. 'File o Text'-->

        <div :class="message.id === 1 ? 'flex justify-end' :
         'flex justify-start'" >

            <div :class="message.id === 1 && message.type === 'text' ? 
            'bg-blue-600 mt-2 p-3 text-white mr-2' 
            : message.id === 2 ? 'bg-slate-100 mt-2 p-3 text-black mr-2' 
            : 'bg-white mt-2 w-full p-3 text-black mr-2'">


            <!-- Se renderiza si el mensaje es un file -->
            <div  v-if="message.type === 'file'">
                
                <hr>
                <br>
                    <div  class="flex justify-between">
                        <div class="flex flex-col">
                        <p>{{ message.version }}</p>


                        <a class="text-blue-700" href=""> <h2 class="font-black">{{ message.title }}</h2></a>

                        <div class="flex">
                            <p>{{ message.docType }}</p>
                            <p class="font-light ml-4">{{ message.date }}</p>

                        </div>
                        </div>


                        <img :src="upload" class="h-10">
                    </div>
                <br>
                <hr>
            
            
            
            </div>
        
            
                <!-- Se renderiza si el mensaje es escrito -->
                <div v-if="message.type === 'text' && message.id === 1" class="flex justify-between">
                    <div class="flex flex-col">
                        <p>{{ message.msg }}</p>
                        <p v-if="message.type === 'text'" class="font-light">{{ message.date }}</p>
                    </div>
                    
                    
                    
                    <img :src="avatar1" class="h-10 ml-3 rounded">
                    
                </div>
                
                <div v-if="message.type === 'text' && message.id === 2" class="flex justify-between flex-row-reverse">
                    <div class="flex flex-col">
                        <p>{{ message.msg }}</p>
                        <p v-if="message.type === 'text'" class="font-light">{{ message.date }}</p>
                    </div>
                    
                    
                    
                    <img v-if="message.type === 'text' && message.id === 2" :src="avatar2" class="h-10 mr-4 rounded">
                    
                </div>
            
            

            
            
            </div>

        </div>
  
      
    </div>
</template>

<script>

import upload from '../assets/upoad.svg'
import avatar1 from '../assets/avatar1.jpeg'
import avatar2 from '../assets/avatar2.jpeg'

    export default {

        data:function(){
            return{
                upload : upload,
                avatar1: avatar1,
                avatar2: avatar2,
            }
        },


        props: ['message']
        
    }
</script>


