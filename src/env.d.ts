/// <reference path="../.astro/types.d.ts" />

/*
 * Starlight 0.42.0 repackaged the library as compiled JS and dropped
 * `virtual-internal.d.ts`, which used to declare these modules. They still
 * exist at runtime -- Starlight's own components import them -- so only the
 * types are missing. Overrides must keep importing through `virtual:` rather
 * than reaching into the package directly, because that is what resolves to
 * *our* override when one is configured.
 *
 * Remove this block once upstream ships the declarations again.
 */
declare module 'virtual:starlight/user-config' {
	const config: import('@astrojs/starlight/types').StarlightConfig;
	export default config;
}

declare module 'virtual:starlight/components/EditLink' {
	const EditLink: typeof import('@astrojs/starlight/components/EditLink.astro').default;
	export default EditLink;
}

declare module 'virtual:starlight/components/Pagination' {
	const Pagination: typeof import('@astrojs/starlight/components/Pagination.astro').default;
	export default Pagination;
}
