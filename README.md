# Alke.js

![GitHub release (latest by date)](https://img.shields.io/github/v/release/NicoSnts/alke)  ![Static Badge](https://img.shields.io/badge/Version-1.0.0-blue)


**Alke.js** is a lightweight, open-source animation library powered by GSAP, designed specifically for easy use within Webflow projects.

With Alke.js, you can quickly create smooth, responsive animations using simple HTML attributes—no need for complex coding. Whether you want to add fade-in effects, staggered animations, or other dynamic visuals, Alke.js has you covered.

![Alke.js Demo](https://github.com/NicoSnts/alke/blob/64a0f5d53a6b5e8bee1d864635139f46f8226fc0/Alke-demo.gif)

### Key Features:

- **Easy to Use:** Add animations directly in your Webflow project using straightforward HTML attributes.
  
- **Highly Customizable:** Fine-tune animations to fit your design needs with flexible options for duration, delay, and more.

- **Responsive:** Built-in support for screen size-based disabling ensures your animations look great on any device.

Alke.js is perfect for Webflow designers and developers who want to enhance their projects with powerful animations, all while keeping the workflow simple and accessible.

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
<script src="https://alke-39d.pages.dev/alke.min.js"></script>
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

## Available Attributes

| Attribute       | Default Value | Description                                                                 | Example                                                      | Optional/Required |
|-----------------|---------------|-----------------------------------------------------------------------------|--------------------------------------------------------------|-------------------|
| `alke-animation`| `fade-in`     | Type of animation. Options: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `fade-in`. | `<div alke-animation="fade-up"></div>`                        | Required          |
| `alke-blur`     | `0px`         | Initial blur amount in pixels. The blur fades out during the animation.      | `<div alke-animation="fade-left" alke-blur="10px"></div>`     | Optional          |
| `alke-type`     | `standard`    | Animation type. Options: `standard`, `stagger`. `stagger` animates child elements sequentially. | `<div alke-type="stagger" alke-stagger="0.2"></div>`          | Optional          |
| `alke-stagger`  | `0.1`         | Time delay between each child element's animation in a `stagger` animation. Only a numeric value (in seconds).  | `<div alke-type="stagger" alke-stagger="0.3"></div>`          | Optional          |
| `alke-distance` | `20%`         | Distance for the initial position of the element before the animation starts. Can be in `px` or `%`. | `<div alke-animation="fade-right" alke-distance="50px"></div>`| Optional          |
| `alke-duration` | `1`           | Duration of the animation in seconds.                                        | `<div alke-animation="fade-up" alke-duration="2"></div>`      | Optional          |
| `alke-delay`    | `0`           | Delay before the animation starts, in seconds.                               | `<div alke-animation="fade-down" alke-delay="0.5"></div>`     | Optional          |
| `alke-infinite` | N/A           | If present, the animation restarts each time the element re-enters the viewport. | `<div alke-animation="fade-left" alke-infinite></div>`        | Optional          |
| `alke-start`    | `top bottom`  | Scroll position at which the animation starts. Format: `elementPosition viewportPosition`. | `<div alke-start="top 50%"></div>`                            | Optional          |
| `alke-disabled` | N/A           | Disables the animation when the screen width is below the specified pixel value. | `<div alke-disabled="991"></div>`                             | Optional          |

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

GSAP (GreenSock Animation Platform) - The powerful animation library that Alke.js is built upon.

### Support

For issues, questions, or suggestions, please open an issue on GitHub.
