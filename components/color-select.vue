<template>
	<div class="color-select">
		<template v-for="(option, index) in ColorOptions" :key="index">
			<input
				:id="`color-select-${option}`"
				v-model="selected"
				name="hand-color"
				type="radio"
				class="screen-reader-only"
				:value="option"
				:checked="selected == option"
				@change="emit('update', selected)"
			>
			<label
				:for="`color-select-${option}`"
				:style="`--color: ${getColor(option)}`"
			>
				<span class="screen-reader-only">
					{{ option.replaceAll('-', ' ') }}
				</span>
			</label>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { ColorOptions, getColor } from './color-options'

	const props = defineProps<{ default: ColorOptions }>()
	const emit = defineEmits<{ update: (value: ColorOptions) => void }>()

	const selected = ref(props.default)
</script>

<style scoped>
	.color-select
	{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 80px 0;
	}

	label
	{
		display: block;
		width: 30px;
		aspect-ratio: 1 / 1;
		border-radius: 100%;
		background: var(--color);
		box-shadow: inset 0 0 0 1px black;
		cursor: pointer;

		transform: scale(1.6);
	}

	label:hover,
	label:focus-visible,
	input:focus-visible + label
	{
		transform: scale(1.8);
	}

	input:checked + label
	{
		box-shadow: 0 0 0 1px #0275ff,
			inset 0 0 0 1px #0275ff;
	}
</style>
