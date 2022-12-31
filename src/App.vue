<template>
	<div>
		hello world!
		<Comp/>
	</div>
</template>

<script setup>
import test from './test';
import Comp from './test/App.vue';

console.log('App.vue');
test();
</script>

<style lang="scss">

</style>
