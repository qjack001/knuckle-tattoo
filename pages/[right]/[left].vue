<template>
	<Title>{{ rightHand }} / {{ leftHand }}</Title>
	<main>
		<Fist
			hand="right"
			:color="color"
			:text="rightHand"
			@update="(input: string) => rightHand = input"
		/>
		<Fist
			hand="left"
			:color="color"
			:text="leftHand"
			@update="(input: string) => leftHand = input"
		/>
	</main>
	<ColorSelect :default="color" @update="(selected) => color = selected"/>
</template>

<script setup lang="ts">
	import { ColorOptions } from '@/components/color-options'

	const { params } = useRoute()
	const rightHand = ref(params.right as string)
	const leftHand = ref(params.left as string)

	const updatePath = () => {
		const right = encodeURIComponent(rightHand.value)
		const left = encodeURIComponent(leftHand.value)

		history.pushState({}, '', `/${right}/${left}`)
	}

	watch(rightHand, updatePath)
	watch(leftHand, updatePath)

	const color = ref(ColorOptions.WHITE)
</script>

<style scoped>
	main
	{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 80px 0;
	}
</style>
