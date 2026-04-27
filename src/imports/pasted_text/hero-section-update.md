Use the MetaLab screenshot as the target visual reference. Use my current Heurisco screenshot only to identify the problems to fix. Do not invent a new design direction.

Fix ONLY the hero section. Do not redesign the rest of the website.

Important background instruction:
Create an AI-generated/static placeholder background image or image-like background that closely resembles the MetaLab hero background style: glossy black abstract surfaces, deep violet/blue light streaks, cinematic dark contrast, reflective folds, and an image-led premium feel. This is only a temporary visual placeholder so I can judge the layout in Figma Make. It will be replaced later in Codex with a real video background, so make the background layer easy to replace.

1. Top-right mail icon must always be visible
The top-right circular mail icon has disappeared. Restore it.

Default state:
• show “CPH 22:36” text
• show a small circular mail icon to the right
• the mail icon must always be visible
• use a subtle thin border and dark transparent fill
• match the compact MetaLab style

Hover state:
• when hovering over the mail icon area, only the mail icon expands into a pill saying “Get in touch”
• the CPH time text should stay in place
• the Heurisco wordmark must not move
• no layout shifting
• use absolute or fixed positioning if needed so the expanding contact pill does not push other elements

2. Heurisco wordmark must stay fixed
The top-centre Heurisco wordmark currently shifts when hovering over the contact icon. Fix this.

The wordmark should:
• stay perfectly centred
• never move on hover
• be slightly bolder
• be a little bigger than the current version
• be compact
• be white/off-white
• use a clean modern sans-serif
• match the clean MetaLab top-centre style

3. Fix all project pill labels and hover states
Use these exact left-side project pill labels:

Synexia
VoiceOver
KBHFF
Napier
IKEA
Alba Denim
Elder Rune
All Work

Important:
Elder Rune must be written exactly as “Elder Rune”, with one R in Rune and a space between Elder and Rune.

Fix the hover issue:
IKEA, Alba Denim, Elder Rune, and All Work currently do not animate on hover. Every pill must use the exact same reusable component and hover behaviour.

All pills should animate on hover:
• slightly lighter background
• slightly brighter text
• smooth transition
• same border behaviour
• no jumpy movement

Do not style the last four pills separately.

4. Hero headline placement
The headline is currently too far left and too low. Move it into the centre area of the screen while keeping a MetaLab-like editorial composition.

Headline text:
Making services
clearer

Place it:
• horizontally centred overall
• slightly below the vertical centre, but not too low
• balanced between the left pills and right paragraph
• closer to the MetaLab composition
• not pushed into the left edge

It can still have an elegant offset between the two lines, but the overall block should feel centred on screen.

5. Hero headline typography
The current serif still looks wrong. Improve it substantially.

Make the headline:
• crisp white
• refined and premium
• high-contrast editorial serif
• better kerning
• smoother letterforms
• thinner and more elegant
• closer to MetaLab’s “We make interfaces”
• not typewriter
• not slab serif
• not chunky
• not rough
• not monospaced

Use a font style similar to a refined Didot, Bodoni, Canela, Editorial New, or Cormorant Garamond if available. The goal is to match the feel of MetaLab’s headline. Use clean anti-aliased white text with no blur, no heavy shadow, and no glow.

6. Background placeholder
The background must look much closer to the MetaLab screenshot than it does now.

Create a full-bleed AI-generated/static placeholder background that visually resembles:
• glossy black abstract folded surfaces
• deep violet and electric blue light streaks
• reflective dark material
• cinematic lighting
• strong contrast
• image-led background, not a plain gradient
• premium digital agency hero mood

This placeholder is temporary. Later, in Codex, I will replace it with a real MP4/WebM video. Therefore:
• keep the background as a separate layer behind all hero content
• keep a dark overlay and vignette above the background for readability
• make the layer easy to replace with a video element later
• do not bake text or UI into the background image

Do not use a plain purple gradient. Do not use flat cards. Do not use simple rectangles. Do not use random blobs. It should visually suggest a real cinematic video frame.

7. Supporting paragraph
Keep the paragraph mid-right like MetaLab:
“Heurisco helps organisations understand messy systems, improve digital journeys, and turn service insight into usable digital experiences.”

Make it:
• smaller and cleaner
• soft white/grey
• similar width to MetaLab
• aligned to the right-side composition
• with a small dot below it
• not too close to the headline

8. Layout safety
Keep the layout stable:
• no horizontal scrolling
• no shifting wordmark on hover
• no elements jumping on hover
• all hero controls remain visible
• top-left Menu stays compact and says only “Menu”
• top-right mail icon stays visible
• left pills stay aligned
• right paragraph stays mid-right with dot below

9. Codex compatibility
Keep this React/Tailwind compatible:
• clean hero component
• reusable pill component
• shared hover style for all pills
• clear background image/video placeholder layer
• no WebGL
• no Three.js
• no canvas
• no shaders
• no particles
• no heavy custom JavaScript

Important:
Do not change the page content or non-hero sections. Only fix the missing mail icon, prevent the Heurisco wordmark from shifting, correct the project labels, make every pill hover consistently, centre and refine the headline, improve the headline font/kerning, and create a temporary AI-generated/static background image that closely resembles the glossy MetaLab-style background. This background is only for preview in Figma Make and will be replaced later in Codex with the real video.

Before changing anything, compare the current hero against the MetaLab screenshot and prioritise exact visual correction over adding new features.