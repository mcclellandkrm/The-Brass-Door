# The Brass Door - Setup Guide

Welcome to your stunning new website! This guide will help you customize it with your own imagery and content.

## Adding Your Own Images & Video

### 1. Hero Video Background

**What you need:** A high-quality video (30-60 seconds) of people enjoying drinks by the fire, or general ambiance of your bar.

**Steps:**
1. Create a folder: `public/videos/`
2. Add your video file (e.g., `hero-background.mp4`)
3. Open `src/components/Hero.jsx`
4. Uncomment lines 22-31 and update the source:

```jsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-40"
>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
</video>
```

**Video specs:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 or higher
- Duration: 30-60 seconds (will loop)
- File size: Keep under 10MB for best performance
- Style: Dark, moody, slightly underexposed works best

---

### 2. Cocktail Gallery Photos

**What you need:** 6 high-quality photos showcasing:
- Your signature cocktails (Mona Lisa, Jamble, Watermelon Margarita)
- Cocktails on the brass bar
- Drinks by candlelight
- Perfect pint of Guinness
- Fireside atmosphere

**Steps:**
1. Create a folder: `public/images/cocktails/`
2. Add your photos with descriptive names:
   - `mona-lisa.jpg`
   - `jamble.jpg`
   - `watermelon-margarita.jpg`
   - `brass-bar.jpg`
   - `candlelit-table.jpg`
   - `guinness.jpg`

3. Open `src/components/CocktailGallery.jsx`
4. Replace the placeholder URLs (around line 8-36):

```jsx
const cocktailImages = [
  {
    id: 1,
    title: 'Mona Lisa',
    description: 'Gin, elderflower, strawberry',
    placeholder: '/images/cocktails/mona-lisa.jpg', // ← Update this
  },
  // ... update all 6 images
]
```

**Photo specs:**
- Format: JPG or WebP
- Resolution: At least 1200x1200px (square)
- Style: Dark, moody lighting with warm tones
- Composition: Close-up, focused on the drink
- Keep file sizes under 500KB each (use tools like TinyPNG to compress)

---

### 3. Parallax Background Images

**What you need:** 2 atmospheric, wide-angle photos:
- One of cocktails/bar atmosphere
- One of your stone walls/brass bar/fireplace

**Steps:**
1. Create a folder: `public/images/parallax/`
2. Add your photos:
   - `cocktails-atmosphere.jpg`
   - `bar-interior.jpg`

3. Open `src/App.jsx`
4. Update the ParallaxSection components (around lines 27-40):

```jsx
<ParallaxSection
  imageUrl="/images/parallax/cocktails-atmosphere.jpg" // ← Update
  quote="Where passion meets perfection, one cocktail at a time"
/>

<ParallaxSection
  imageUrl="/images/parallax/bar-interior.jpg" // ← Update
  quote="Stone, brass, and firelight — crafted for comfort"
  height="h-[50vh]"
/>
```

**Photo specs:**
- Format: JPG
- Resolution: At least 2400x1600px (landscape)
- Style: Wide-angle, atmospheric
- Composition: Should look good slightly out of focus (parallax effect)
- Keep file sizes under 1MB each

---

## Photography Tips for Best Results

### Lighting
- **Golden hour**: Shoot in the evening with warm, low lighting
- **Candlelight**: Use actual candles for authentic warm glow
- **Avoid flash**: Use natural light or continuous lighting
- **Shadows matter**: Don't be afraid of dark areas — adds drama

### Composition
- **Rule of thirds**: Position drinks off-center
- **Depth of field**: Blur backgrounds slightly to focus on the drink
- **Show context**: Include brass bar, stone walls, or fire in background
- **Human element**: Hands holding drinks adds warmth

### Editing
- **Slightly underexpose**: Keep it moody
- **Warm color temperature**: 3200-3800K range
- **Increase contrast**: Make brass and highlights pop
- **Subtle vignette**: Darken edges slightly
- **Sharpen details**: But don't overdo it

---

## Customizing Content

### Cocktail Names & Descriptions
Edit `src/components/Cocktails.jsx` (lines 4-26) to update your signature cocktails.

### Opening Hours
Edit `src/components/Contact.jsx` (line 65-68) to update your hours.

### Location Details
Edit `src/components/Contact.jsx` (line 62) for your full address.

---

## Using Placeholders Temporarily

The site currently uses beautiful stock images from Unsplash. These are perfect for:
- Development and testing
- Getting stakeholder approval on layout/design
- Understanding the visual style before your photoshoot

**Important:** Replace all Unsplash URLs before going live to avoid any usage issues.

---

## Recommended Image Tools

- **Compression**: [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- **Editing**: Adobe Lightroom, Capture One, or [Photopea](https://www.photopea.com/) (free)
- **Video editing**: DaVinci Resolve (free) or Adobe Premiere
- **Color grading**: Apply a "warm film" or "moody bar" LUT preset

---

## Need a Professional Photographer?

For best results, consider hiring a food & beverage photographer who specializes in:
- Restaurant/bar photography
- Cocktail photography
- Low-light/atmospheric shooting
- Detail shots

Budget: €300-600 for a half-day shoot (should get all images you need)

---

## Questions?

Check the main README.md for development setup, or review the component files — they're well-commented with instructions on where to add your custom content.

**Happy customizing! 🍸✨**
