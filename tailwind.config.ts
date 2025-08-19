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
			colors: {
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
				// Portfolio specific colors
				glass: 'hsl(var(--glass))',
				glow: 'hsl(var(--glow))',
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))',
				'glass-gradient': 'linear-gradient(135deg, hsl(var(--glass) / 0.8), hsl(var(--glass) / 0.4))',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)',
			},
			backdropBlur: {
				'glass': '20px',
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'warm-float': 'warm-float 12s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				'gradient': 'gradient 8s linear infinite',
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'warm-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) scale(1)',
						filter: 'blur(120px) hue-rotate(0deg)'
					},
					'25%': { 
						transform: 'translateY(-30px) translateX(15px) scale(1.1)',
						filter: 'blur(100px) hue-rotate(10deg)'
					},
					'50%': { 
						transform: 'translateY(-20px) translateX(-10px) scale(0.9)',
						filter: 'blur(130px) hue-rotate(20deg)'
					},
					'75%': { 
						transform: 'translateY(10px) translateX(20px) scale(1.05)',
						filter: 'blur(110px) hue-rotate(15deg)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 5px hsl(var(--success)), 0 0 10px hsl(var(--success)), 0 0 15px hsl(var(--success))'
					},
					'50%': {
						boxShadow: '0 0 10px hsl(var(--success)), 0 0 20px hsl(var(--success)), 0 0 30px hsl(var(--success))'
					}
				},
				'gradient': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
