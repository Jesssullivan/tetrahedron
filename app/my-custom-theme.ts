import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #34ee84
		"--color-primary-50": "225 252 237", // #e1fced
		"--color-primary-100": "214 252 230", // #d6fce6
		"--color-primary-200": "204 251 224", // #ccfbe0
		"--color-primary-300": "174 248 206", // #aef8ce
		"--color-primary-400": "113 243 169", // #71f3a9
		"--color-primary-500": "52 238 132", // #34ee84
		"--color-primary-600": "47 214 119", // #2fd677
		"--color-primary-700": "39 179 99", // #27b363
		"--color-primary-800": "31 143 79", // #1f8f4f
		"--color-primary-900": "25 117 65", // #197541
		// secondary | #ec732d
		"--color-secondary-50": "252 234 224", // #fceae0
		"--color-secondary-100": "251 227 213", // #fbe3d5
		"--color-secondary-200": "250 220 203", // #fadccb
		"--color-secondary-300": "247 199 171", // #f7c7ab
		"--color-secondary-400": "242 157 108", // #f29d6c
		"--color-secondary-500": "236 115 45", // #ec732d
		"--color-secondary-600": "212 104 41", // #d46829
		"--color-secondary-700": "177 86 34", // #b15622
		"--color-secondary-800": "142 69 27", // #8e451b
		"--color-secondary-900": "116 56 22", // #743816
		// tertiary | #df7b69
		"--color-tertiary-50": "250 235 233", // #faebe9
		"--color-tertiary-100": "249 229 225", // #f9e5e1
		"--color-tertiary-200": "247 222 218", // #f7deda
		"--color-tertiary-300": "242 202 195", // #f2cac3
		"--color-tertiary-400": "233 163 150", // #e9a396
		"--color-tertiary-500": "223 123 105", // #df7b69
		"--color-tertiary-600": "201 111 95", // #c96f5f
		"--color-tertiary-700": "167 92 79", // #a75c4f
		"--color-tertiary-800": "134 74 63", // #864a3f
		"--color-tertiary-900": "109 60 51", // #6d3c33
		// success | #48893a
		"--color-success-50": "228 237 225", // #e4ede1
		"--color-success-100": "218 231 216", // #dae7d8
		"--color-success-200": "209 226 206", // #d1e2ce
		"--color-success-300": "182 208 176", // #b6d0b0
		"--color-success-400": "127 172 117", // #7fac75
		"--color-success-500": "72 137 58", // #48893a
		"--color-success-600": "65 123 52", // #417b34
		"--color-success-700": "54 103 44", // #36672c
		"--color-success-800": "43 82 35", // #2b5223
		"--color-success-900": "35 67 28", // #23431c
		// warning | #6fe5f3
		"--color-warning-50": "233 251 253", // #e9fbfd
		"--color-warning-100": "226 250 253", // #e2fafd
		"--color-warning-200": "219 249 252", // #dbf9fc
		"--color-warning-300": "197 245 250", // #c5f5fa
		"--color-warning-400": "154 237 247", // #9aedf7
		"--color-warning-500": "111 229 243", // #6fe5f3
		"--color-warning-600": "100 206 219", // #64cedb
		"--color-warning-700": "83 172 182", // #53acb6
		"--color-warning-800": "67 137 146", // #438992
		"--color-warning-900": "54 112 119", // #367077
		// error | #ab6cc0
		"--color-error-50": "242 233 246", // #f2e9f6
		"--color-error-100": "238 226 242", // #eee2f2
		"--color-error-200": "234 218 239", // #eadaef
		"--color-error-300": "221 196 230", // #ddc4e6
		"--color-error-400": "196 152 211", // #c498d3
		"--color-error-500": "171 108 192", // #ab6cc0
		"--color-error-600": "154 97 173", // #9a61ad
		"--color-error-700": "128 81 144", // #805190
		"--color-error-800": "103 65 115", // #674173
		"--color-error-900": "84 53 94", // #54355e
		// surface | #f50ed9
		"--color-surface-50": "254 219 249", // #fedbf9
		"--color-surface-100": "253 207 247", // #fdcff7
		"--color-surface-200": "253 195 246", // #fdc3f6
		"--color-surface-300": "251 159 240", // #fb9ff0
		"--color-surface-400": "248 86 228", // #f856e4
		"--color-surface-500": "245 14 217", // #f50ed9
		"--color-surface-600": "221 13 195", // #dd0dc3
		"--color-surface-700": "184 11 163", // #b80ba3
		"--color-surface-800": "147 8 130", // #930882
		"--color-surface-900": "120 7 106", // #78076a

	}
}