<template>
	<Head>
		<Meta charset="utf-8"/>
		<Meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<Meta content="text/html; charset=utf-8" http-equiv="content-type"/>
		<Meta name="theme-color" content="#fff"/>
		<Title>Knuckle Tats</Title>
	</Head>
	<div class="app">
		<NuxtPage/>
	</div>
</template>

<style>
	@font-face
	{
		font-family: 'Cristone';
		src: url('https://fonts.goodbyte.ca/cristone-uppercase.woff2') format('woff2'),
			url('https://fonts.goodbyte.ca/cristone-uppercase.woff') format('woff');
	}

	body
	{
		margin: 0;
		background: white;
		font-family: 'Cristone', serif;
	}

	.screen-reader-only
	{
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
	}
</style>
