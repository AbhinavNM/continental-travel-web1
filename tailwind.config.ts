import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'lato': ['Lato', 'sans-serif'],
				'merriweather': ['Merriweather', 'serif'],
				'alegreya': ['Alegreya', 'serif'],
				'arvo': ['Arvo', 'serif'],
				'amatic': ['Amatic SC', 'cursive'],
				'josefin': ['Josefin Slab', 'serif'],
				'bowlby': ['Bowlby One SC', 'cursive'],
				'dancing': ['Dancing Script', 'cursive'],
				'playfair-sc': ['Playfair Display SC', 'serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'sans': ['Lato', 'sans-serif'], // Default sans
				'serif': ['Merriweather', 'serif'], // Default serif
			},
			fontSize: {
				'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.5px' }], // 56px
				'h1': ['2.625rem', { lineHeight: '1.2', letterSpacing: '0.5px' }], // 42px
				'h1-mobile': ['1.875rem', { lineHeight: '1.2', letterSpacing: '0.5px' }], // 30px
				'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '0.5px' }], // 36px
				'h2-mobile': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.5px' }], // 24px
				'h3': ['1.75rem', { lineHeight: '1.4', letterSpacing: '0.25px' }], // 28px
				'h3-mobile': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.25px' }], // 20px
				'body': ['1.125rem', { lineHeight: '1.6' }], // 18px
				'body-mobile': ['1rem', { lineHeight: '1.6' }], // 16px
				'small': ['0.875rem', { lineHeight: '1.5' }], // 14px
			},
			colors: {
				// New cool-toned gradient color palette
				coolBlue: {
					900: '#184e77', // Darkest blue
					800: '#1e6091', // Dark blue
					700: '#1a759f', // Medium-dark blue
					600: '#168aad', // Medium blue
					500: '#34a0a4', // Blue-teal
					400: '#52b69a', // Teal-green
					300: '#76c893', // Light green
					200: '#99d98c', // Lighter green
					100: '#b5e48c', // Very light green
					50: '#d9ed92',  // Lightest green
				},
				// Keep existing shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
