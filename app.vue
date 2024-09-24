<template>
	<Html
		:lang="localeProperties.code"
		:dir="localeProperties.direction">
		<Body>
			<NuxtLoadingIndicator color="#FEFCE8" />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">
	const { localeProperties } = useI18n();
</script>
