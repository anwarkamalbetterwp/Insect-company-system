<script setup lang="ts">
	import { NotificationRed, BurgerMenu } from "../icons";
	const { isOpen } = useSidebar();
</script>
<template>
	<header class="">
		<nav
			class="h-20 px-6 container my-4 py-[18px] bg-white drop-shadow-xs rounded-2xl justify-between items-center flex">
			<Logo />

			<div class="cent gap-8">
				<BaseLangSwitcher />
				<NotificationRed
					size="40"
					class="cursor-pointer" />
				<BurgerMenu
					size="40"
					@click="isOpen = true"
					class="cursor-pointer" />
			</div>
		</nav>
	</header>
</template>

<style scoped></style>
