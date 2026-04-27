Create a single-screen MetaLab-style hero prototype with interactive menu and contact states.

Use the attached MetaLab screenshot as the visual target. Use the attached video as the reference for preloader style, menu motion, hover previews, and transitions. Use my current Heurisco screen only to identify what is broken.

Important:
Remove all content below the hero. Delete or hide every section after the hero, including “Better digital experiences start with clearer understanding”, services, process, work, about, contact, footer, and any other scroll content. This should feel like a single immersive prototype with hero, menu overlay, and contact state. No normal landing page scroll.

1. Single-screen hero
Create only one full viewport hero:
• 100vh
• no footer
• no extra scroll sections
• dark cinematic background
• floating UI only

2. Preloader
Add a premium MetaLab-style preloader before the hero:
• black/dark full-screen background
• small centred Heurisco wordmark
• minimal refined loading motion
• white/off-white typography
• smooth transition into hero
• no generic spinner
• no colourful loading bar
• CSS/Tailwind animation only

3. Hero layout
Keep:
• Menu pill top-left, text only “Menu”, no hamburger icon
• Heurisco wordmark top-centre
• CPH time and mail icon top-right
• project pills left side
• supporting paragraph mid-right
• headline centred
• glossy dark image-like background placeholder

4. Top-right mail icon
The white mail icon must always be visible in default state.

Default:
• show “CPH 22:45”
• show small circular white mail icon to the right
• icon container uses semi-transparent medium dark grey fill and soft border
• compact MetaLab style

Hover:
• mail icon expands smoothly into pill
• expanded pill shows icon and “Get in touch”
• CPH time does not move
• Heurisco wordmark does not move
• no layout shift

Click:
• clicking “Get in touch” should replay a short dark preloader transition
• then show a contact state/page
• contact state should remain in the same premium dark MetaLab style
• include: “Start a conversation” and hello@heurisco.co.uk
• include a small “Back” or “Close” pill to return to hero

5. Project pills
Use exact labels:
Synexia
VoiceOver
KBHFF
Napier
IKEA
Alba Denim
Elderrune
All Work

Important:
• Alba Denim exactly
• Elderrune exactly, one word
• All Work exactly

Fix hover on the last four pills:
IKEA, Alba Denim, Elderrune, and All Work must hover exactly like Synexia, VoiceOver, KBHFF, and Napier.

All project pills must use one reusable component:
• same class names
• same padding
• same z-index
• same pointer events
• same hover transition
• same cursor pointer
• no different wrapper for the last four pills
• no invisible overlay blocking hover
• whole visible pill triggers hover instantly

Hover:
• slightly lighter or active background
• brighter white border
• crisp white text
• smooth transition
• no jumpy movement

6. Pill colour system
All pills should match MetaLab more closely:
• Menu pill
• project pills
• mail/contact pill
• overlay menu pills if used

Default:
• semi-transparent medium dark grey fill
• soft grey border
• soft white text
• compact rounded shape
• slightly lighter than current dark outline style

Hover:
• background becomes closer to dark hero colour
• border becomes brighter white
• text becomes crisp white

7. Headline
Replace current headline with:
Delivering service
clarity

Make it:
• centred in hero area
• crisp white
• refined high-contrast editorial serif
• close to MetaLab’s “We make interfaces”
• good kerning
• smooth letterforms
• not typewriter
• not slab
• not chunky
• not rough
• not monospaced

8. Typography
Use System UI for Heurisco wordmark only:
system-ui, -apple-system, BlinkMacSystemFont, “Segoe UI”, sans-serif

Use Basis Grotesque Pro for interface text where possible:
• Menu
• project pills
• CPH time
• Get in touch
• supporting paragraph
• menu overlay text

Fallback: Inter, Helvetica Neue, Arial, sans-serif.

Do not use Basis Grotesque Pro for the hero headline. Use refined editorial serif for headline.

9. Supporting paragraph
Use exact text:
“Heurisco helps teams discover clearer digital paths through service design, UX design, web design, and practical transformation.”

Position:
• mid-right like MetaLab
• small and clean
• soft grey/white
• similar width to MetaLab
• small violet/white dot below

10. Background placeholder
Create full-bleed static/image-like placeholder:
• glossy black abstract surfaces
• deep violet and electric blue light streaks
• reflective dark material
• cinematic lighting
• strong contrast
• image-led, not flat
• no plain gradient
• no flat cards
• no random blobs

This is temporary and will be replaced later in Codex with a real MP4/WebM video. Keep it as a separate background layer behind all content with overlay/vignette above it.

11. Menu interaction
Clicking the Menu pill should open a full-screen MetaLab-style menu overlay.

Menu overlay:
• dark full-screen layer
• smooth cinematic transition from hero
• Heurisco wordmark remains top-centre
• close pill top-left or top-right
• large elegant menu list
• refined typography
• project/work items visible

Menu items:
Synexia
VoiceOver
KBHFF
Napier
IKEA
Alba Denim
Elderrune
All Work
Contact

Hover behaviour in menu:
• hovering each menu item changes a preview image/visual on the right side
• use placeholder visuals for each project
• smooth fade between preview images
• menu item text brightens on hover
• no layout shift
• no heavy JavaScript

Clicking Contact in the menu should trigger the same preloader transition and then show the contact state.

12. Layering and safety
Ensure:
• all UI above background and overlay
• mail icon visible by default
• all pills hover correctly
• no hidden layer blocks hover
• no horizontal scrolling
• no content below hero
• Heurisco never shifts on hover

13. Codex compatibility
Keep React/Tailwind compatible:
• single hero component
• preloader component
• menu overlay component
• contact state component
• one reusable Pill component
• shared hover styles
• clear background/video placeholder layer
• no WebGL
• no Three.js
• no canvas
• no shaders
• no particles
• no heavy custom JavaScript

Final goal:
A single-screen MetaLab-style Heurisco prototype with hero, preloader, interactive menu overlay, hover image previews, and contact transition. Fix the missing default mail icon, fix the last four pill hovers, remove all content below the hero, and keep it ready for Codex to replace the placeholder background with a real video.