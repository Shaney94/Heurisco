Fix ONLY the current single-screen MetaLab-style prototype. Do not redesign the hero visually unless required to fix the bugs.

Use the current Heurisco screen as the bug state. Use the MetaLab hero screenshot as the hero reference. Use the MetaLab contact screenshot as the contact reference.

Critical bugs to fix:

1. Top-right mail icon is missing
The small circular button next to the CPH time currently has no visible mail icon in its default state. It expands on hover, but the icon is missing.

Fix it so the default state always shows a clear white mail/letter/envelope icon inside the circle.

Default state:
• show “CPH 23:13”
• show a small circular button to the right
• inside the circle, show a white envelope/mail icon
• the icon must be visible before hover
• the icon must not be transparent, hidden, or same colour as background
• circle uses same MetaLab-style pill colour as the other controls
• semi-transparent dark grey fill
• soft border
• compact size

Hover state:
• circular mail button expands into a pill
• expanded pill shows the white mail icon and “Get in touch”
• icon remains visible during hover
• CPH time does not move
• Heurisco wordmark does not move
• no layout shift

Use a simple inline SVG envelope icon if needed. Do not rely on an icon library if it causes the icon to disappear.

2. Fix left-side bottom four pill hover bugs
The first four pills hover correctly:
Synexia
VoiceOver
KBHFF
Napier

The bottom four still do not hover correctly:
IKEA
Alba Denim
Elderrune
All Work

Fix this properly. All eight pills must use the exact same reusable component and same hover behaviour.

Use these exact labels:
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

The whole visible pill area must trigger hover instantly. Make sure:
• same component for every pill
• same className for every pill
• same hover class for every pill
• same padding and height
• same z-index
• pointer-events enabled
• cursor pointer
• no invisible overlay blocking the bottom four pills
• no parent container blocking hover
• no separate wrapper for the bottom four
• no conditional hover logic that only affects the first four

Hover state for every pill:
• slightly darker or active background
• brighter white border
• crisp white text
• smooth transition
• no movement/jump

3. Fix Get in touch click crash
Clicking the top-right mail/Get in touch control currently crashes or fails. Fix the click interaction.

When clicked:
• do not crash
• do not navigate to a missing route
• do not reference missing files
• do not depend on unavailable components
• show the contact state in the same app/prototype

Implement this as local state, for example:
hero state → contact state

4. Contact state/page
When Get in touch is clicked, show a full-screen contact state inspired by the attached MetaLab contact screenshot.

Contact layout:
• full-screen black/dark background
• Menu pill top-left
• Heurisco wordmark top-centre
• CPH time and icons top-right
• large refined serif heading on left
• form on right
• minimal underline input fields
• no white cards
• no generic contact box
• premium MetaLab-style spacing

Contact heading:
Say hey.

Left text:
Not sure where to start?

Tell us about your service, product, timeline, and what you’re trying to improve. Or reach out directly at contact@heurisco.io.

We read every message. So, thanks in advance for making it a good one.

Social links:
LinkedIn
Instagram
X

Form fields:
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

Add a small Back or Close pill so the user can return to the hero. The click must work and must not crash.

5. Keep single-screen prototype only
There should be no regular scrolling website sections below the hero/contact state. Remove or hide all extra sections:
• no “Better digital experiences start with clearer understanding”
• no services section
• no process section
• no work section
• no footer

This prototype should have only:
• hero state
• contact state
• optional menu overlay state

6. Preserve what already works
Do not change the current hero headline:
Delivering service
clarity

Do not change the current project pill placement unless needed to fix hover. Do not change the visual style more than necessary.

7. Typography
Use System UI for the Heurisco wordmark only:
system-ui, -apple-system, BlinkMacSystemFont, “Segoe UI”, sans-serif

Use Basis Grotesque Pro for interface text where possible:
Menu, pills, CPH time, Get in touch, paragraph, form labels, placeholders, social links.

Use fallback Inter, Helvetica Neue, Arial, sans-serif if Basis Grotesque Pro is unavailable.

Hero headline and contact heading should use refined editorial serif, not Basis Grotesque Pro.

8. Layering and interaction safety
Ensure:
• mail icon button has pointer-events enabled
• all pills have pointer-events enabled
• contact click handler is attached to the visible button
• no invisible overlay blocks hover/click
• all interactive controls are above the background and overlay
• no layout shift on hover
• no horizontal scrolling

9. Codex compatibility
Keep React/Tailwind compatible:
• local state for hero/contact
• reusable Pill component
• reusable envelope icon SVG component
• reusable contact button component
• no missing imports
• no missing files
• no WebGL
• no Three.js
• no canvas
• no shaders
• no particles
• no heavy JavaScript

Important:
Prioritise only these fixes: visible white envelope/mail icon in the default top-right circle, working hover for IKEA, Alba Denim, Elderrune, and All Work, and a non-crashing Get in touch click that opens the MetaLab-style contact state.