<template>
    <div class="relative col-span-1 aspect-square rounded-lg">
        <nuxt-img :src="src" class="h-full w-full object-cover rounded-lg" />
        <div
            class="absolute top-0 w-full h-full l-0 bg-gradient-to-b from-dark via-transparent to-dark p-3 flex flex-col justify-between items-start rounded-lg">
            <div class="w-full flex items-center" :class="getTheOrder(1)">
                <button
                    class=" border-[1px] bg-light text-dark border-solid border-light px-3 text-sm py-1 rounded-md"> {{ category }} </button>
            </div>
            <div class="text-light w-full">
                <h2 class="text-3xl font-light w-full" :class="getTheOrder(2)">{{ name }}</h2>
                <p class="font-extralight" :class="getTheOrder(2)"> {{ type }} </p>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    src: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
})

const getTheOrder = (v)=>{
    if(v === 1){
        if(props.order % 2 === 0 ){
            return "justify-end"
        }
        else{
            return "justify-start"
        }
    } else if(v === 2){
        if(props.order % 2 == 0){
            return "text-left"
        }else{
            return "text-right"
        }
    }
}

</script>