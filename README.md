## Nova Estate

**Nova Estate** is a user-friendly online residential real estate website that is very helpful in finding your home.

**Visit the live site:** [Nova Estate](https://nova-estate.web.app/).


**Website Features and Characteristics:**

1. **Homepage:**
   - Banner with auto-slider images.
   - Clickable title leading to the properties page.
   - Featured properties section with cards.
   - Image gallery with auto-slider.
   - Section displaying trusted by company.

2. **Navbar and Footer:**
   - Navbar with website name "Nova Estate" and navigation links.
   - Footer with website logo, company info, privacy terms, and contact info.

3. **Navigation:**
   - Navbar and footer remain consistent across all pages.
   - Navigation links include routes like home, properties, about us, login, update profile, and wishlist.
   - Profile picture and logout button shown if logged in.

4. **Properties Page:**
   - Displays single property cards with details like image, location, name, short description, area, bedrooms, price, bathrooms, and a view property button.
   - Image zooms slightly on hover.

5. **View Property Page:**
   - Protected route requiring login.
   - Displays detailed property information including ID, type, year of build, area, rooms, bedrooms, bathrooms, parking facility, and other features.
   - Uses React Leaflet for the map.

6. **About Us Page:**
   - Contains company information, FAQ, apartment and house numbers, customer testimonials, and a get in touch form.

7. **Login and Register Pages:**
   - Supports email/password login or login with Google and GitHub.
   - Passwords can be shown or hidden.
   - Form validation using React Hook Form.
   - Redirects to the requested page after login.
   - Success toast messages upon successful login or registration.

8. **Update Profile Page:**
   - Allows users to update their name and photoURL.
   - Form validation and save changes button activation using React Hook Form.
   - Displays updated information upon submission.

9. **Wishlist Page:**
   - Displays wishlisted properties with details similar to the properties page.

10. **404 Error Page:**
    - Displays a "404 not found" message with a button to return to the home page.

11. **Dynamic Page Titles:**
    - Implemented using React Helmet Async.

12. **Scroll Restoration:**
    - Ensures a smooth scrolling experience on every page.

13. **Firebase Integration:**
    - Uses Firebase for storing data and managing user authentication.

14. **User Authentication:**
    - Supports login with email/password or via third-party services like Google and GitHub.
    - Implements user authentication and session management using Firebase.
    - Utilizes protected routes to restrict access to certain pages based on user authentication status.

15. **Responsive Design:**
    - Ensures optimal viewing experience across various devices, including mobile phones, tablets, and desktops.
    - Utilizes responsive CSS frameworks like Tailwind CSS to achieve consistent layout and styling.

16. **Interactive UI Elements:**
    - Incorporates interactive elements like buttons, sliders, and forms to enhance user engagement.
    - Implements hover effects, transitions, and animations using TailwindCSS and JavaScript libraries like AOS.

17. **Error Handling and Validation:**
    - Provides real-time validation feedback on form inputs, ensuring data accuracy and completeness.
    - Displays error messages in case of invalid inputs or failed form submissions.
    - Uses React Toastify to show error notifications in a visually appealing and user-friendly manner.

18. **Database Integration:**
    - Stores and retrieves data using Firebase Firestore, allowing for seamless data management and synchronization.
    - Implements CRUD operations (Create, Read, Update, Delete) to interact with user profiles, property listings, and wishlist items.


19. **SEO Optimization:**
    - Implements meta tags, headings, and structured data to improve search engine visibility and ranking.
    - Utilizes React Helmet Async to dynamically set page titles, descriptions, and other metadata.


20. **Performance Optimization:**
    - Minifies and compresses assets (JavaScript, CSS, images) to reduce page load times and improve site performance.
    - Implements lazy loading and code splitting techniques to prioritize essential content and improve initial page rendering speed.





**React npm Packages Used:**

1. **firebase:**
    - Offers a comprehensive set of tools and services for building and managing web and mobile applications.
    - Enables real-time data synchronization, user authentication, and cloud storage through Firebase services like Firestore, Authentication, and Storage.

2. **aos:**
    - Animate On Scroll (AOS) library that adds animations to elements as they become visible during scrolling.
    - Supports various animation types and options to create engaging and visually appealing effects.

3. **react-toastify:**
    - Provides a simple and customizable way to display toast notifications in React applications.
    - Offers features like auto-dismissal, position customization, and support for different notification types (success, error, info).

4. **swiper:**
    - A powerful and easy-to-use slider library for creating responsive, touch-enabled sliders and carousels.
    - Supports features like pagination, navigation arrows, autoplay, and parallax effects for creating dynamic slide presentations.

5. **react-icons:**
    - A collection of popular icon libraries (Font Awesome, Material Icons, etc.) packaged as React components.
    - Simplifies the integration of icons into React applications without the need for additional CSS or image assets.

6. **react-helmet-async:**
    - Provides a React Helmet implementation that allows setting document head elements asynchronously.
    - Enables dynamic management of metadata like titles, descriptions, and other SEO-related tags for each page.

7. **react-router-dom:**
    - A declarative routing solution for React applications that enables navigation and URL management.
    - Facilitates the creation of multi-page applications with client-side routing and nested route hierarchies.

8. **leaflet:**
    - An open-source JavaScript library for interactive maps, commonly used in web applications.
    - Provides features like map tiles, markers, popups, and geolocation support for creating customizable and interactive maps.

9. **react-hook-form:**
    - Provides a flexible and efficient way to manage form state and validation in React applications.
    - Supports advanced form features like field arrays, conditional validation, and custom input components.



These features and npm packages contribute to creating a robust, user-friendly, and visually appealing residential website like Nova Estate.