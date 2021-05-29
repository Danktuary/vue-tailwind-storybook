<template>
	<h1 class="m-0 font-semibold text-3xl">{{ message }}</h1>
	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">
			VSCode
		</a>
		+
		<a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">
			Vetur
		</a>
		or
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">
			Volar
		</a>
		(if using <code>&lt;script setup&gt;</code>)
	</p>
	<p>See <code>README.md</code> for more information.</p>
	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank">
			Vite Docs
		</a>
		|
		<a href="https://v3.vuejs.org/" target="_blank">
			Vue 3 Docs
		</a>
	</p>
	<button
		@click="count++"
		class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md focus:outline-blue-500"
	>
		Count is: {{ count }}
	</button>
	<p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
	message: {
		type: String,
		required: true,
	},
});

const count = ref(0)
</script>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
