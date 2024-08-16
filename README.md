# Next.js Website

This project is a website built using [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/) for styling and [Swiper.js](https://swiperjs.com/) for creating responsive sliders.

## Project Setup

To set up this project locally, follow the steps below:

### 1. Clone the Repository

```bash
git clone https://github.com/webwithrathor/mugs.git
```

### 2. Navigate to the Project Directory

```bash
cd mugs
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `pages/` - Contains the Next.js pages.
- `components/` - Reusable React components.
- `public/` - Static assets like images and fonts.
- `styles/` - Global styles and Tailwind configuration.

## Styling with Tailwind CSS

Tailwind CSS is used for styling throughout the project. The configuration file (`tailwind.config.js`) has been set up to customize the default Tailwind settings.

### Adding Custom Styles

You can add custom styles in the `styles/globals.css` file or directly in your components using Tailwind's utility-first classes.

## Sliders with Swiper.js

Swiper.js is used for creating responsive and touch-friendly sliders. The necessary Swiper modules are imported and used in the components.

