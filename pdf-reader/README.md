<h2>PDF Reader App</h2>
<p>
  This project is a responsive PDF Reader application built with React.js.It
  fetches PDF details from an external API and integrates search functionality
  for use. Application is fully responsive and includes error handling for API
  calls. It also supports navigation through different pages using React Router
  DOM and has been deployed on Netlify.
</p>
<h3>Features</h3>
<ul>
  <li>
    <b>PDF Details Fetching</b>: Uses an external API to fetch PDF details.
  </li>
  <li>
    <b>Search Functionality</b>: Allows users to search through the titles on
    the home page.
  </li>
  <li>
    <b>Responsive Design</b>: The application is responsive and works on all
    screen sizes.
  </li>
  <li>
    <b>Navigation</b>: Utilizes React Router DOM for navigation between pages.
  </li>
  <li>
    <b>Error Handling</b>: Implements error handling and API calls using Axios.
  </li>
  <li><b>Deployment</b>: Deployed on Netlify for access.</li>
</ul>
<h3>Installation & Usage</h3>
<ol>
  <li>go to the folder : cd pdf-reader</li>
  <li>run commnd for install all require library : npm install</li>
  <li>
    run this commnd for starting this project on local server : npm run dev
  </li>
</ol>
<h3>API</h3>
<p>The application uses the following API to fetch PDF details:</p>
<a href="https://api.npoint.io/dee51ea017d20efdfcc8"
  >https://api.npoint.io/dee51ea017d20efdfcc8</a
>
<h3>Components</h3>
<ol>
  <li>
    <b>HomePage</b>: Displays the list of PDFs with their basic details. There
    is displaying thumbnail facing some problem I trying to solve this
  </li>
  <li><b>Navbar</b>: In this page Implements home tab and search bar.</li>
  <li><b>DetailPage</b>: Shows detailed information about the selected PDF.</li>
  <li>
    <b>PDFElement</b>: In this page create basic pdf detail of a single pdf.
  </li>
  <li>
    <b>App</b>: Main component that handles routing between HomePage and
    DetailPage.
  </li>
</ol>
<h3>Libraries Used</h3>
<ol>
  <li><b>React</b>: JavaScript library for building user interfaces.</li>
  <li><b>Axios</b>: Promise-based HTTP client for making API calls.</li>
  <li><b>React Router DOM</b>: For handling routing in the application.</li>
</ol>
<h3>Deployment</h3>
<p>The project is deployed on Netlify.</p>
<a href="link">link</a>
