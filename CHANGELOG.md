# Changelog

All notable changes to TaylorURL will be documented in this file.

## [2.6] - 2026-02-04

- Updated the Prettier configuration in .prettierrc to format the plugins list as an array with proper indentation for better readability.
- Adjusted the Tailwind configuration in tailwind.config.js with extensive updates to custom colors, breakpoints, and other styling properties to align with the latest design requirements.
- Made minor structural updates to various components and views including App.jsx, Footer.jsx, Navigation.jsx, About.jsx, Auth.jsx, Home.jsx, Pricing.jsx, Services.jsx, and Work.jsx to ensure consistency and compatibility with the updated styling.
- Enhanced the Home view with refined content and layout adjustments for improved user experience and visual flow.
- Updated the main application entry in main.jsx to include a small but necessary code addition for proper initialization.
- Revised the PostCSS configuration in postcss.config.js to optimize the build process with updated settings.
- Improved the index.html file with updated metadata and structural changes for better performance and accessibility.

## [2.5] - 2026-02-04

- Removed the Contact page and its associated route from the application, simplifying the navigation structure.
- Revamped the Footer component with a new design, featuring a gradient background, a semi-transparent black card with
  backdrop blur, and updated styling for icons and text with hover effects.
- Updated the Footer content by removing the Services category from navigation links and simplifying the Company links,
  while adjusting the layout for better responsiveness.
- Enhanced the Navigation component with a redesigned mobile menu, including a smooth animation for the menu toggle and
  improved accessibility with ARIA attributes.
- Improved the PageHero component by adding new styling for hero sections with better typography and responsive
  adjustments.
- Overhauled the Home view with updated content structure, focusing on clearer messaging and refined visual hierarchy
  for key sections.
- Redesigned the About view with expanded content, improved layout for readability, and updated imagery for a more
  engaging presentation.
- Updated the Work view with a refreshed portfolio display, featuring improved spacing and hover interactions for
  project cards.
- Completely redesigned the Pricing view with a modern card-based layout, enhanced comparison tables, and improved
  call-to-action buttons for better user engagement.
- Made minor styling updates to the Services view, adjusting spacing and typography for consistency with the overall
  design refresh.
- Applied a global design refresh in index.css, introducing new utility classes, refined animations, and consistent
  spacing and typography across the application.
- Adjusted the Clients component layout by updating the container class for better width control with max-w-6xl.
- Updated Tailwind configuration with new customizations for colors and breakpoints to support the design overhaul.

## [2.4] - 2026-02-04

- Updated the About page to reflect a shift from an individual focus to a business entity, TaylorURL, now described as a
  web development agency based in Houston specializing in local businesses.
- Revised the About page content to emphasize affordable pricing and reliable service for local businesses needing an
  online presence.
- Replaced the "Core Skills" section with "What We Do" on the About page, listing specific services like Custom Website
  Development, E-Commerce Solutions, and Mobile-Responsive Design.
- Expanded the values section on the About page, adding new values such as "Results Driven," "Client Focused," and "
  Reliable Support," with updated descriptions to align with a business-oriented approach.
- Changed pronouns and messaging throughout the About page from "I" to "We" to represent a team perspective.
- Updated icons on the About page, adding Target and Clock icons while maintaining existing ones like Zap and Users for
  visual representation of values.
- Adjusted the layout of the values grid on the About page to support a responsive design with up to three columns on
  larger screens.
- Removed the testimonials section from the Home page, eliminating customer quotes and related content to streamline the
  page.
- Removed unused icon imports from the Home page, such as Code, TrendingUp, Star, and Mail, to clean up the codebase.
- Simplified content in the Services and Work pages by removing or adjusting minor elements, though specific details are
  less extensive compared to About page updates.

## [2.3] - 2026-02-02

- Updated package.json to replace custom release and cleanup scripts with "turl-release" command
- Added new public/turl.json file with version and project metadata
- Removed public/version.json file with old version metadata
- Deleted scripts/cleanup.js file
- Deleted scripts/release.js file
- Minor update to src/views/Auth.jsx file with unspecified changes

## [2.2] - 2026-02-01

- Added new Auth view component at src/views/Auth.jsx
- Added new License view component at src/views/License.jsx
- Added new Privacy view component at src/views/Privacy.jsx
- Added new Terms view component at src/views/Terms.jsx

## [2.1] - 2026-02-01

- Added new configuration file vercel.json for deployment settings

## [2.0] - 2026-02-01

- Updated `max_tokens` from 400 to 1000 for changelog generation in `scripts/release.js`.
- Updated `max_tokens` from 500 to 1000 for commit message generation in `scripts/release.js`.
- Adjusted padding and container classes in `Footer.jsx` to be responsive with `px-4 sm:px-6` and `py-12 sm:py-16`.
- Modified logo text size in `Footer.jsx` to be responsive with `text-xl sm:text-2xl`.
- Updated description text size in `Footer.jsx` to be responsive with `text-sm sm:text-base`.
- Changed copyright text size in `Footer.jsx` to be responsive with `text-xs sm:text-sm`.
- Adjusted padding for copyright section in `Footer.jsx` to `pt-6 sm:pt-8`.
- Updated layout structure in `Footer.jsx` by changing margin-bottom classes to `mb-8 sm:mb-12`.
- Modified padding and container classes in `PageHero.jsx` to be responsive with `px-4 sm:px-6` and
  `pb-12 sm:pb-16 sm:pt-24 sm:pt-32`.
- Adjusted title text size in `PageHero.jsx` to be responsive with `text-3xl sm:text-4xl md:text-5xl`.
- Updated description text size in `PageHero.jsx` to be responsive with `text-base sm:text-lg`.
- Adjusted padding in `Contact.jsx` to be responsive with `py-12 sm:py-16`.
- Updated container padding in `Contact.jsx` to be responsive with `px-4 sm:px-6`.
- Changed grid layout in `Contact.jsx` for contact methods to be responsive with `mb-8 sm:mb-12 sm:grid-cols-2`.
- Adjusted padding for message form container in `Contact.jsx` to be responsive with `p-4 sm:p-6`.
- Added `logo-wave-dark` class to "Send a Message" heading in `Contact.jsx`.
- Updated form input layout in `Contact.jsx` to be responsive with `grid gap-4 sm:grid-cols-2`.
- Adjusted heading text size in `Home.jsx` to be responsive with `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`.
- Updated description text size in `Home.jsx` to be responsive with `text-lg sm:text-xl`.

## [1.9] - 2026-02-01

- Added new ScrollToTop.jsx component file
- Initial setup of ScrollToTop component structure

## [1.8] - 2026-02-01

- Updated README.md to add a smiley face to the personal note.

## [1.7] - 2026-02-01

- Version update

## [1.6] - 2026-02-01

- Version update

## [1.5] - 2026-02-01

- Version update

## [1.4] - 2026-02-01

- Version update

## [1.3] - 2026-02-01

- Version update

## [1.2] - 2026-02-01

- Version update

## [1.1] - 2026-02-01

- Version update

## [1.8] - 2026-02-01

- Version update

## [1.7] - 2026-02-01

- Version update

## [1.6] - 2026-02-01

- Version update
