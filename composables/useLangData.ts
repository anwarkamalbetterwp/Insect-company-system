export default (data: any) => {
	const { locale } = useI18n();
	return locale.value === "en" ? data.en : data.ar;
};
