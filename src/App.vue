<script setup lang="ts">
import { ref } from 'vue';
import useWsChat from './scripts/useWsChat';

const chats = ref<any[]>([]);

useWsChat('UJeQNZ0m1Q0', data => {
    if (chats.value.length >= 20) chats.value.shift();
    chats.value.push(data);
});
</script>

<template>
    <div class="flex flex-col justify-end h-screen p-10">
        <div
            v-for="chat in chats"
            class="bg-white text-black font-medium rounded-2xl rounded-bl-none w-96 px-4 py-2 mb-2 animate-chat"
            :key="chat.id"
        >
            <div class="font-semibold inline-flex flex-row items-center align-middle">
                <img
                    :src="chat.author.thumbnail.url"
                    :alt="chat.author.thumbnail.alt"
                    class="w-5 h-5 mr-1 rounded-full"
                />
                <h3>{{ chat.author.name }}</h3>
                <img
                    v-if="chat.author.badge"
                    :src="chat.author.badge.thumbnail.url"
                    :alt="chat.author.badge.thumbnail.alt"
                    class="w-5 h-5 ml-1"
                />
            </div>
            <br />
            <div class="text-sm">
                <p v-if="chat.message[0].text">{{ chat.message[0].text }}</p>
                <img
                    v-if="!chat.message[0].text"
                    :src="chat.message[0].url"
                    :alt="chat.message[0].alt"
                    class="w-7 h-7"
                />
            </div>
        </div>
    </div>
</template>
