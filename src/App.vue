<template>
	<div>
		hello world!
		<Comp/>
	</div>
</template>

<script setup lang="ts">
import test from './test';
import Comp from './test/App.vue';

console.log('App.vue');
test();
</script>

<style lang="scss">

</style>
