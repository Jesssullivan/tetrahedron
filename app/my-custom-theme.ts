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
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #06a0d8
		"--color-primary-50": "218 241 249", // #daf1f9
		"--color-primary-100": "205 236 247", // #cdecf7
		"--color-primary-200": "193 231 245", // #c1e7f5
		"--color-primary-300": "155 217 239", // #9bd9ef
		"--color-primary-400": "81 189 228", // #51bde4
		"--color-primary-500": "6 160 216", // #06a0d8
		"--color-primary-600": "5 144 194", // #0590c2
		"--color-primary-700": "5 120 162", // #0578a2
		"--color-primary-800": "4 96 130", // #046082
		"--color-primary-900": "3 78 106", // #034e6a
		// secondary | #22078b
		"--color-secondary-50": "222 218 238", // #dedaee
		"--color-secondary-100": "211 205 232", // #d3cde8
		"--color-secondary-200": "200 193 226", // #c8c1e2
		"--color-secondary-300": "167 156 209", // #a79cd1
		"--color-secondary-400": "100 81 174", // #6451ae
		"--color-secondary-500": "34 7 139", // #22078b
		"--color-secondary-600": "31 6 125", // #1f067d
		"--color-secondary-700": "26 5 104", // #1a0568
		"--color-secondary-800": "20 4 83", // #140453
		"--color-secondary-900": "17 3 68", // #110344
		// tertiary | #e70d90
		"--color-tertiary-50": "251 219 238", // #fbdbee
		"--color-tertiary-100": "250 207 233", // #facfe9
		"--color-tertiary-200": "249 195 227", // #f9c3e3
		"--color-tertiary-300": "245 158 211", // #f59ed3
		"--color-tertiary-400": "238 86 177", // #ee56b1
		"--color-tertiary-500": "231 13 144", // #e70d90
		"--color-tertiary-600": "208 12 130", // #d00c82
		"--color-tertiary-700": "173 10 108", // #ad0a6c
		"--color-tertiary-800": "139 8 86", // #8b0856
		"--color-tertiary-900": "113 6 71", // #710647
		// success | #61ef06
		"--color-success-50": "231 253 218", // #e7fdda
		"--color-success-100": "223 252 205", // #dffccd
		"--color-success-200": "216 251 193", // #d8fbc1
		"--color-success-300": "192 249 155", // #c0f99b
		"--color-success-400": "144 244 81", // #90f451
		"--color-success-500": "97 239 6", // #61ef06
		"--color-success-600": "87 215 5", // #57d705
		"--color-success-700": "73 179 5", // #49b305
		"--color-success-800": "58 143 4", // #3a8f04
		"--color-success-900": "48 117 3", // #307503
		// warning | #19d173
		"--color-warning-50": "221 248 234", // #ddf8ea
		"--color-warning-100": "209 246 227", // #d1f6e3
		"--color-warning-200": "198 244 220", // #c6f4dc
		"--color-warning-300": "163 237 199", // #a3edc7
		"--color-warning-400": "94 223 157", // #5edf9d
		"--color-warning-500": "25 209 115", // #19d173
		"--color-warning-600": "23 188 104", // #17bc68
		"--color-warning-700": "19 157 86", // #139d56
		"--color-warning-800": "15 125 69", // #0f7d45
		"--color-warning-900": "12 102 56", // #0c6638
		// error | #639223
		"--color-error-50": "232 239 222", // #e8efde
		"--color-error-100": "224 233 211", // #e0e9d3
		"--color-error-200": "216 228 200", // #d8e4c8
		"--color-error-300": "193 211 167", // #c1d3a7
		"--color-error-400": "146 179 101", // #92b365
		"--color-error-500": "99 146 35", // #639223
		"--color-error-600": "89 131 32", // #598320
		"--color-error-700": "74 110 26", // #4a6e1a
		"--color-error-800": "59 88 21", // #3b5815
		"--color-error-900": "49 72 17", // #314811
		// surface | #4ce768
		"--color-surface-50": "228 251 232", // #e4fbe8
		"--color-surface-100": "219 250 225", // #dbfae1
		"--color-surface-200": "210 249 217", // #d2f9d9
		"--color-surface-300": "183 245 195", // #b7f5c3
		"--color-surface-400": "130 238 149", // #82ee95
		"--color-surface-500": "76 231 104", // #4ce768
		"--color-surface-600": "68 208 94", // #44d05e
		"--color-surface-700": "57 173 78", // #39ad4e
		"--color-surface-800": "46 139 62", // #2e8b3e
		"--color-surface-900": "37 113 51", // #257133

	}
}