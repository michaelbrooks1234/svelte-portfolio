import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			height: {
				'80vh': '80vh',
				'60vh': '60vh',
			},
			width: {
				'60vw': '60vw',
				'30vw': '30vw',
				'80vw': '80vw',
				'95vw': '95vw',
			}
		},
	},
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'hamlindigo',
						enhancements: true,
					},
				],
			},
		}),
		forms,
	],
} satisfies Config;
