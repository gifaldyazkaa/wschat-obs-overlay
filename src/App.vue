<script setup lang="ts">
import { ref } from 'vue';
import useWsChat from './scripts/useWsChat';

const chats = ref<any[]>([]);

useWsChat('3pzW2HqKn80', data => {
    if (chats.value.length >= 10) chats.value.shift();
    chats.value.push(data);
});
</script>

<template>
    <div>
        <div
            v-for="chat in chats"
            class="bg-white text-black font-medium rounded-2xl rounded-bl-none w-96 px-4 py-2 mb-2"
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

<style scoped></style>
