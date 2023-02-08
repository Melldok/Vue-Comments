import { defineStore } from "pinia";

const formattedDate = () => {
    //Format de la fecha como se pide en el mockup
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const d = new Date;
    return d.toLocaleDateString('es-ES', options);
}


export const useModalStore = defineStore('modal', {
    state: () => ({
        isOpen: true,
        messages: [

            {
            id: 1,
            type: 'file', 
            version: 'VERSION 1',
            title: 'Título del archivo a subir.pdf',
            docType: 'Documento / PDF (3.8MB)',
            date: formattedDate()
            },
            {
            id: 1,
            type: 'text', 
            msg: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión',
            date: formattedDate()
            },
            {
            id: 2, 
            type: 'text',
            msg: '¡Gran trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un apartado final de conclusiones personales.',
            date: formattedDate()
            },
            {
            id: 1,
            type: 'file', 
            version: 'VERSION 2',
            title: 'Título del archivo a subir 2.pdf',
            docType: 'Documento / PDF (4.8MB)',
            date: formattedDate()
            },
            {
            id: 1,
            type: 'text', 
            msg: 'Realizados los cambios según feedback',
            date: formattedDate()
            },
            {
            id: 2, 
            type: 'text',
            msg: 'Perfecto, excelente trabajo.',
            date: formattedDate()
            },
        ]
    }),
    actions: {
        openModal(){
            this.isOpen = true
        },
        closeModal(){
            this.isOpen = false
        },
        addMessage(message){
            this.messages.push(message)
        }
    },
   

})