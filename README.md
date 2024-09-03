<img src="src/assets/img/icon-128.png" width="64"/>

# Chrome Extension (MV3) Boilerplate with React 18 and Webpack 5 and v0

## Features

This boilerplate is heavily inspired by and adapted from [https://github.com/lxieyang/chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react), with additional support for tailwind and v0.

I highly recommend checking out the original repo for more information about how to use it.

I'll list the modifications I've made below.
1. install tailwind css and other related packages
``` bash
npm install tailwindcss postcss postcss-cli autoprefixer tailwindcss-animate tailwind-merge class-variance-authority @radix-ui/react-slot postcss-loader --save-dev
```
2.  run 
``` bash
 run npx tailwindcss init
```
3. After running it, tailwind.config.js file is generated. Import this code.
``` javascript
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```
4. Create postcss.config.js file and insert this code.
``` javascript
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}
```
Add postcss loader in webpack.config.js
``` javascript
{
        // look for .css or .scss files
        test: /\.(css|scss)$/,
        // in the `src` directory
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
```
5. Add `lib/utils.ts` under `src/` folder.
``` javascript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

6. Install v0 component
  1. Pretend there is a Next.js framework by adding two files in the root directory.
    - `next.config.mjs`
      ``` javascript
      /** @type {import('next').NextConfig} */
      const nextConfig = {};

      export default nextConfig;
      ```
    - `next-env.d.ts`
      ``` javascript
      /// <reference types="next" />
      /// <reference types="next/image-types/global" />

      // NOTE: This file should not be edited
      // see https://nextjs.org/docs/basic-features/typescript for more information.
      ```
  2. Add the following code to `tsconfig.json`. In this way, the components created by v0 will be added to `src`
    ``` json
        "compilerOptions": {
          "baseUrl": ".",
          "paths": {
            "@/*": ["./src/*"]
          },
        }
    ```
  3. Add the following code to `webpack.config.js`. This will support the '@' alias used insided the v0 components.
    ``` javascript
      var alias = {
        '@': path.resolve(__dirname, '/src'),
      };
    ```
  4. Add `import React from 'react';` at the top of each component file created by v0.


congrats! 🎉 You can leverage the v0 component