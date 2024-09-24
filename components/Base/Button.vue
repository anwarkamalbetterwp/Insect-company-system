<template>
	<button :class="[baseClasses, variantClasses, sizeClasses]">
		<Icon
			v-if="firstIcon"
			:name="firstIcon"
			class="icon"
			:class="iconClass" />
		<slot />
		<Icon
			v-if="lastIcon"
			:name="lastIcon"
			class="icon"
			:class="iconClass" />
	</button>
</template>

<script setup lang="ts">
	// Define ButtonVariant enum
	enum ButtonVariant {
		PRIMARY = "primary",
		GRADIENT = "gradient",
		OUTLINE_PRIMARY = "outlinePrimary",
		OUTLINE_SECONDARY = "outlineSecondary",
		OUTLINE_THIRD = "outlineThird",
		OUTLINE_ERROR = "outlineError",
		SECONDARY = "secondary",
		SUCCESS = "success",
		WARNING = "warning",
		ERROR = "error",
		ERROR_NOBORDER = "errorNoBorder",
	}

	// Define props
	const props = defineProps({
		variant: {
			type: String as PropType<keyof typeof ButtonVariant>,
			default: ButtonVariant.PRIMARY,
		},
		size: {
			type: String as PropType<"small" | "medium" | "large">,
			default: "medium",
		},
		firstIcon: String,
		lastIcon: String,
		iconClass: String,
	});

	// Base classes common to all buttons
	const baseClasses = "rounded-lg font-medium px-4 py-2 transition-all  duration-300 border cent gap-1";
	// Computed classes for the button variant
	const variantClasses = computed(() => {
		const normalizedVariant = props.variant.toLowerCase() as keyof typeof ButtonVariant;
		const variantMap: Record<ButtonVariant, string> = {
			[ButtonVariant.PRIMARY]: "bg-primary1 text-lightFont  hover:bg-primary2 border-primary2",
			[ButtonVariant.SECONDARY]:
				"bg-secondary text-lightFont hover:bg-opacity-80 border-secondary",
			[ButtonVariant.SUCCESS]: "bg-success text-lightFont hover:bg-opacity-80 border-success",
			[ButtonVariant.WARNING]: "bg-warning text-lightFont hover:bg-opacity-80 border-warning",
			[ButtonVariant.ERROR]: "bg-error text-lightFont hover:bg-opacity-80 border-error",
			[ButtonVariant.GRADIENT]:
				"bg-gradient1 text-lightFont hover:bg-opacity-80 border-gradient1",
			[ButtonVariant.OUTLINE_PRIMARY]: "border-primary1 text-primary1",
			[ButtonVariant.OUTLINE_SECONDARY]: "border-secondryFont text-secondryFont ",
			[ButtonVariant.OUTLINE_THIRD]: "border-thirdFont text-thirdFont",
			[ButtonVariant.OUTLINE_ERROR]: "border-error text-error",
			[ButtonVariant.ERROR_NOBORDER]: " text-error hover:bg-opacity-80 border-transparent",
		};
		return variantMap[
			ButtonVariant[normalizedVariant.toUpperCase() as keyof typeof ButtonVariant]
		];
	});

	// Computed classes for size
	const sizeClasses = computed(() => {
		const sizeMap: Record<string, string> = {
			small: "text-clamp-sm",
			medium: "text-clamp-md",
			large: "text-clamp-lg",
		};
		return sizeMap[props.size];
	});
</script>

<style scoped>

</style>
