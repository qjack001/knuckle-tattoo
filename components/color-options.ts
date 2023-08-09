
export enum ColorOptions {
	WHITE = 'white',
	YELLOW = 'yellow',
	LIGHT = 'light-skin-tone',
	MEDIUM_LIGHT = 'medium-light-skin-tone',
	MEDIUM = 'medium-skin-tone',
	MEDIUM_DARK = 'medium-dark-skin-tone',
	DARK = 'dark-skin-tone',
}

export function getColor(color: ColorOptions): string {
	switch (color) {
		case ColorOptions.WHITE: return '#ffffff'
		case ColorOptions.YELLOW: return '#ffd458'
		case ColorOptions.LIGHT: return '#f8d9b8'
		case ColorOptions.MEDIUM_LIGHT: return '#e4c29c'
		case ColorOptions.MEDIUM: return '#c19169'
		case ColorOptions.MEDIUM_DARK: return '#a06940'
		case ColorOptions.DARK: return '#5c473c'
	}
}