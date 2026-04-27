Fix ONLY the single-screen MetaLab-style prototype. Do not add normal scrolling page sections.

Use the MetaLab hero screenshot as the hero target reference. Use the MetaLab contact screenshot as the contact state target reference. Use my current Heurisco screen only to identify what is broken.

1. Fix the top-right mail icon default state
The top-right mail icon is still missing in its normal state. It only appears on hover. Fix this properly.

Default top-right state must show:
• “CPH 22:45”
• a small circular white mail icon to the right of the time
• the mail icon must be visible before hover
• the icon itself must be white/off-white
• the circular icon container should use the MetaLab-style pill colour: semi-transparent medium dark grey fill, soft grey border
• compact size like MetaLab

Hover state:
• hovering the mail icon expands it into a rounded pill
• expanded pill shows the mail icon plus “Get in touch”
• mail icon remains visible during hover
• CPH time does not move
• Heurisco wordmark does not move
• no layout shift

Technical instruction:
The icon must not be opacity 0, display none, visibility hidden, or colour-matched to the background in default state. It must be visibly rendered by default.

2. Fix last four project pill hover states
The final four pills still do not hover like the first four.

Use exact labels:
Synexia
VoiceOver
KBHFF
Napier
IKEA
Alba Denim
Elderrune
All Work

Important spelling:
• Alba Denim exactly
• Elderrune exactly, one word
• All Work exactly

Broken pills to fix:
• IKEA
• Alba Denim
• Elderrune
• All Work

These four must behave exactly like Synexia. Use one reusable pill component for every project pill. Do not create separate wrappers or styles for the last four.

Every pill must have:
• same class names
• same padding
• same z-index
• same pointer-events enabled
• same cursor pointer
• same hover transition
• same visible hover area
• no invisible overlay blocking it
• no parent layer blocking it

Hover behaviour:
• whole pill area triggers hover instantly
• background changes to active dark/grey
• border becomes brighter white
• text becomes crisp white
• smooth transition
• no jumpy movement

3. Contact click state
When clicking the top-right mail/Get in touch control, show a contact state/page inspired by the attached MetaLab contact screenshot.

Use a dark full-screen contact layout. It should feel like MetaLab:
• black background
• Heurisco wordmark top-centre
• Menu pill top-left
• time and small icons top-right
• large refined serif heading on the left
• form on the right
• minimal underline inputs
• premium spacing
• no white card
• no generic contact form block

Contact heading:
“Say hey.”

Left contact text:
“Not sure where to start?

Tell us about your service, product, timeline, and what you’re trying to improve. Or reach out directly at contact@heurisco.io.

We read every message. So, thanks in advance for making it a good one.”

Social links:
LinkedIn
Instagram
X

Contact form fields:
Name*
Placeholder: Enter your name

Email*
Placeholder: Enter your email

How did you hear of us?*
Placeholder: Enter your answer

What stage is your company?
Dropdown default: Select One
Dropdown options:
Early-stage startup
Mid-stage startup
Late-stage startup
Enterprise

Message*
Placeholder: Type your message

Newsletter checkbox:
Signup to Newsletter

Submit button:
Submit

4. Contact transition
Clicking Get in touch should:
• trigger a short premium dark transition or preloader
• then reveal the contact state
• no normal page scroll
• contact should replace the hero as a full-screen state
• include a way back to the hero, such as Menu or a subtle back/close pill

5. Keep single-screen prototype logic
Remove or hide all standard content below the hero:
• no “Better digital experiences start with clearer understanding”
• no services section
• no process section
• no work grid below
• no about section
• no footer below the hero
• no normal scroll page

This should be an immersive prototype with:
• hero state
• menu overlay state
• contact state

6. Typography
Use System UI for the Heurisco wordmark only:
system-ui, -apple-system, BlinkMacSystemFont, “Segoe UI”, sans-serif

Use Basis Grotesque Pro for interface text where possible:
• Menu
• project pills
• CPH time
• Get in touch
• supporting paragraph
• form labels
• input placeholders
• social links

Fallback: Inter, Helvetica Neue, Arial, sans-serif.

Hero headline and contact heading should use a refined high-contrast editorial serif close to MetaLab. Not typewriter, not slab, not chunky, not rough, not monospaced.

7. Hero headline
Keep:
Delivering service
clarity

Make it crisp white, centred in the hero area, refined, elegant, and close to MetaLab’s serif headline.

8. Supporting paragraph
Keep:
“Heurisco helps teams discover clearer digital paths through service design, UX design, web design, and practical transformation.”

Position it mid-right like MetaLab, with small dot below.

9. Codex compatibility
Keep React/Tailwind compatible:
• hero component
• contact state component
• menu overlay component if present
• reusable Pill component
• reusable contact button component
• no WebGL
• no Three.js
• no canvas
• no shaders
• no particles
• no heavy JavaScript
• no horizontal scrolling

Important:
Prioritise these fixes: visible default mail icon, hover behaviour for IKEA, Alba Denim, Elderrune and All Work, and a MetaLab-style contact state matching the attached contact screenshot.