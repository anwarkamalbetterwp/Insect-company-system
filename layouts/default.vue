<template>
	<div id="layout">
		<LayoutSideBar />
		<LayoutHeader />
		<div class="flex-grow">
			<slot />
		</div>
		<!-- <LayoutFooter /> -->
	</div>
</template>
<style scoped>
	#layout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		position: relative;
		background-color: rgb(var(--bg));
		color: rgb(var(--primaryFont));
	}
</style>
