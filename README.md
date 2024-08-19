# Alke.js

Alke.js is a lightweight, GSAP-powered animation library that enables smooth, responsive animations via simple HTML attributes. Easily add fade-in effects, staggered animations, and more. Fully customizable with support for screen size-based disabling, making it perfect for modern, dynamic web projects.

## Features
- **Attribute-Based Animations:** Define animations directly in your HTML using intuitive attributes like `alke-animation`, `alke-duration`, and more.
- **Staggered Animations:** Easily apply staggered animations to child elements for sophisticated effects.
- **Responsive Control:** Disable animations on smaller screens using the `alke-disabled` attribute.
- **Customizable:** Control the distance, duration, delay, and other properties of your animations with ease.
- **Built on GSAP:** Leverages the power of GSAP for smooth and performant animations.

## Installation

To use Alke.js in your Webflow project, you need to include both the GSAP library and Alke.js.

### Step 1: Include GSAP

Add the following script in the **Custom Code** section of your Webflow project or directly in the `<head>` of your page setting:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
```

### Step 2: Include Alke.js

Add the Alke.js script after the GSAP script in the **Custom Code** section of your Webflow project or your page setting `</body>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/yourusername/alke.js@latest/alke.js"></script>
```

## Usage

Simply add the necessary alke-* attributes to your HTML elements to apply animations.

### Basic Example
```html
<div alke-animation="fade-up" alke-duration="1" alke-delay="0.5"></div>
```

### Staggered Animation Example
```html
<div alke-type="stagger" alke-stagger="0.2" alke-distance="50px" alke-duration="1"></div>
```

### Disabling Animations on Small Screens
```html
<div alke-animation="fade-left" alke-duration="2" alke-disabled="991"></div>
```

## Available Attributes

| Attribute       | Default Value | Description                                                                 | Example                                                      |
|-----------------|---------------|-----------------------------------------------------------------------------|--------------------------------------------------------------|
| `alke-animation`| `fade-in`     | Type of animation. Options: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `fade-in` | `<div alke-animation="fade-up"></div>`                        |
| `alke-blur`     | `0px`         | Initial blur amount in pixels. The blur fades out during the animation.      | `<div alke-animation="fade-left" alke-blur="10px"></div>`     |
| `alke-type`     | `standard`    | Animation type. Options: `standard`, `stagger`. `stagger` animates child elements sequentially. | `<div alke-type="stagger" alke-stagger="0.2"></div>`          |
| `alke-stagger`  | `0.1s`        | Time delay between each child element's animation in a `stagger` animation.  | `<div alke-stagger="0.3s"></div>`                             |
| `alke-distance` | `20%`         | Distance for the initial position of the element before the animation starts. Can be in `px` or `%`. | `<div alke-animation="fade-right" alke-distance="50px"></div>`|
| `alke-duration` | `1s`          | Duration of the animation in seconds.                                        | `<div alke-animation="fade-up" alke-duration="2"></div>`      |
| `alke-delay`    | `0s`          | Delay before the animation starts, in seconds.                               | `<div alke-animation="fade-down" alke-delay="0.5"></div>`     |
| `alke-infinite` | N/A           | If present, the animation restarts each time the element re-enters the viewport. | `<div alke-animation="fade-left" alke-infinite></div>`        |
| `alke-start`    | `top bottom`  | Scroll position at which the animation starts. Format: `elementPosition viewportPosition`. | `<div alke-start="top 50%"></div>`                            |
| `alke-disabled` | N/A           | Disables the animation when the screen width is below the specified pixel value. | `<div alke-disabled="991"></div>`                             |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

	•	GSAP (GreenSock Animation Platform) - The powerful animation library that Alke.js is built upon.

### Support

For issues, questions, or suggestions, please open an issue on GitHub.
