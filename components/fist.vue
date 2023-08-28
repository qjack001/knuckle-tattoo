<template>
	<div class="fist" :data-hand="hand" :style="`--background: url('/img/${color}.png')`">
		<label
			:for="`${hand}-hand-input`"
			class="screen-reader-only"
		>
			{{ hand }}-hand text
		</label>
		<input
			:id="`${hand}-hand-input`"
			v-model="value"
			type="text"
			@input="value = value.slice(0, 4); emit('update', value)"
		>
		<p role="presentation">
			<!-- These are the letters, tuned for display (split up and centered) -->
			<!-- By adding 4 spaces to the string, we can be sure to never go out of bounds -->
			<span>{{ `${value}    `[0] }}</span>
			<span>{{ `${value}    `[1] }}</span>
			<span>{{ `${value}    `[2] }}</span>
			<span>{{ `${value}    `[3] }}</span>
		</p>
	</div>
</template>
<script setup lang="ts">
	const props = defineProps<{
		text: string
		hand: 'left' | 'right'
		color: typeof ColorOptions
	}>()

	const emit = defineEmits<{ update: (text: string) => void }>()

	const value = ref(props.text)
</script>

<style scoped>
	div.fist
	{
		display: flex;
		align-items: center;
		justify-content: center;

		width: 250px;
		aspect-ratio: 1 / 1;
		perspective: 320px;

		background-image: var(--background);
		background-size: cover;
	}

	.fist[data-hand="left"],
	.fist[data-hand="left"] > *
	{
		scale: -1 1;
	}

	.fist input,
	.fist p
	{
		position: absolute;
		display: block;
		border: none;
		border-radius: 0;
		outline: none;
		margin: 0;
		padding: 0;
		padding-left: 40px;
		background: transparent;

		font-family: inherit;
		text-transform: uppercase;
		font-size: 60px;
		letter-spacing: 0.7em;
		width: 300px;

		transform: rotate3d(0, 1, 0.11, 327deg) translateX(-28px);
		filter: drop-shadow(0 0 7px rgb(0 0 0 / 40%));
		opacity: 0.8;
	}

	.fist[data-hand="left"] input,
	.fist[data-hand="left"] p
	{
		transform: rotate3d(0, 1, 0.11, -327deg) translateX(50px);
	}

	.fist p
	{
		display: flex;
		flex-direction: row;
		user-select: none;
		pointer-events: none;
		letter-spacing: 0;
		padding: 0;
	}

	.fist p span
	{
		display: block;
		width: 70px;
		text-align: center;
		-webkit-text-stroke: 1px black;
	}

	/* switch visibility between display an input on focus */
	.fist input { opacity: 0 }
	.fist:focus-within p { opacity: 0 }
	.fist:focus-within input { opacity: 1 }
</style>
