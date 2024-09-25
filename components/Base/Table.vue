<template>
	<div class="overflow-x-auto">
		<div
			class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
			<table class="min-w-full">
				<thead>
					<tr>
						<th
							class="px-3 py-3 text-xs font-medium leading-4 tracking-wider text-start text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
							{{ $t("placeholder.name") }}
						</th>
						<th
							class="px-3 py-3 text-xs font-medium leading-4 tracking-wider text-start text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
							{{ $t("placeholder.title") }}
						</th>
						<th
							class="px-3 py-3 text-xs font-medium leading-4 tracking-wider text-start text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
							{{ $t("status") }}
						</th>
						<th
							class="px-3 py-3 text-xs font-medium leading-4 tracking-wider text-start text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
							{{ $t("category") }}
						</th>
						<th class="px-3 py-3 border-b border-gray-200 bg-gray-50" />
					</tr>
				</thead>

				<tbody class="bg-white">
					<tr>
						<td class="px-3 border-b border-gray-200 whitespace-nowrap">
							<div class="flex items-center">
								<div class="flex-shrink-0 size-16 rounded-md overflow-hidden"></div>

								<div class="ms-4 max-w-[14ch] overflow-hidden">
									<div class="text-sm font-medium leading-5 text-gray-900">sdsds</div>
									<div class="text-[9px] leading-5 text-gray-500">dsfdsf</div>
								</div>
							</div>
						</td>

						<td class="px-3 border-b border-gray-200 whitespace-nowrap">
							<div class="text-sm leading-5 text-gray-900">dsfsfs</div>
							<div class="text-sm leading-5 text-gray-500">dfsfsf</div>
						</td>

						<td class="px-3 border-b border-gray-200 whitespace-nowrap">
							<span
								class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
								>sfsrfw</span
							>
						</td>

						<td
							class="px-3 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
							fesfwf
						</td>

						<td
							class="px-6 py-4 text-sm font-medium leading-5 border-b border-gray-200 whitespace-nowrap">
							<div class="flex gap-6 items-center justify-end">
								<NuxtLink
									:to="useLocaleR(`/dashboard/products/edit`)"
									class="text-indigo-600 hover:text-indigo-800 hover:underline"
									>{{ $t("edit") }}</NuxtLink
								>
								<button
									class="text-red-600 hover:text-red-800 hover:underline duration-300">
									{{ $t("delete") }}
								</button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
