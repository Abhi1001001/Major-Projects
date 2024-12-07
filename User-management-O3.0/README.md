<h1>User Mangement App Project</h1>
Link : <a href="https://user00management.netlify.app/" >User Management App </a>
    <h2>Overview</h2>
    <p>
      The User Management Application is a Website built with ReactJS
      that allows users to manage a list of users through a responsive and
      intractive interface. It features the ability to add new users, update user
      details, delete users, and view detailed information about each user. The
      application uses a JSON server as a fake API for database functionality
      and ensures data validation using regular expressions (Regex).
    </p>
    <hr/>
    <h2>Features</h2>
    <ol>
      <b><li>User List Display:</li></b>
      <ul>
        <li>The homepage displays a table of all users fetched from a fake JSON server API.</li>
        <li>Each user entry includes basic details like name, email, and contact information</li>
      </ul>
      <b><li>Add New User:</li></b>
      <ul>
        <li>Users can open a popup window to add new user details.</li>
        <li>All form fields are validated using Regex to ensure proper input formatting.</li>
      </ul>
      <b><li>Update User Details:</li></b>
      <ul>
        <li>Users can select an existing user to edit and update their details.</li>
        <li>Changes are submitted and reflected in the user list.</li>
      </ul>
      <b><li>Delete User:</li></b>
      <ul>
        <li>Users can remove any user entry from the list.</li>
      </ul>
      <b><li>Detailed User View:</li></b>
      <ul>
        <li>Clicking on a detailed view icon to navigates a detailed view page.</li>
        <li>The page displays all available details about the selected user.</li>
      </ul>
      <b><li>Responsive Design:</li></b>
      <ul>
        <li>The application is fully responsive, ensuring compatibility with desktops, tablets, and mobile devices.</li>
      </ul>
      <b><li>Client-Side Routing:</li></b>
      <ul>
        <li>Navigation between pages is seamless, using React Router DOM.</li>
      </ul>
    </ol>
    <hr/>
    <h2>Technologies Used</h2>
    <ol>
      <b><li>Frontend:</li></b>
      <ul>
        <li>ReactJS (Functional Components)</li>
        <li>NextUI Framework (for styling)</li>
        <li>React Router DOM (for navigation)</li>
      </ul>
      <b><li>Backend/Database:</li></b>
      <ul>
        <li>JSON Server Fake API (for simulating backend operations)</li>
        <li>Context API is used for data handling</li>
      </ul>
      <b><li>Validation:</li></b>
      <ul>
      <li>Regex (for input field validation)</li>
    </ul>
      <b><li>Development Tools:</li></b>
      <ul>
        <li>VS Code</li>
        <li>Node.JS</li>
      </ul>
    </ol>
    <hr/>
    <h2>Usage Instructions</h2>
    <ol>
      <b><li>Home Page:</li></b>
      <ul>
        <li>Displays the user list with options to add, update, delete, or view details.</li>
      </ul>
      <b><li>Add User:</li></b>
      <ul>
        <li>Click the "Add User" button to navigate to the add user popup.</li>
        <li>Fill in all required fields and click "Add".</li>
      </ul>
      <b><li>Update User:</li></b>
      <ul>
        <li>Click the "Edit" button on any user entry to modify their details.</li>
        <li>Update the form fields and save changes.</li>
      </ul>
      <b><li>Delete User:</li></b>
      <ul>
        <li>Click the delete icon button on any user entry to remove them from the list.</li>
      </ul>
      <b><li>Detailed View:</li></b>
      <ul>
        <li>Click on a detailed icon button to navigate to their detailed view page.</li>
      </ul>
    </ol>
    <hr/>
    <h2>Validation Details</h2>
    <ul>
      <li><b>Name Field:</b>Only allows alphabets with proper formatting (e.g., "John Doe").</li>
      <li><b>Email Field:</b>Ensures a valid email format (e.g., "example@mail.com").</li>
      <li><b>Username Field:</b>Validates Username in at least 3 character.</li>
      <li><b>Contect Field:</b>Validates Phone number in standard formats.</li>
    </ul>
    <hr/>
    <h2>Screenshots</h2>
    <ul>
      <b><li>Home Page</li></b>
      <b><li>Add User Form</li></b>
      <b><li>Edit User</li></b>
      <b><li>Detailed User View</li></b>
    </ul>
    <hr/>
    <h2>Future Enhancements</h2>
    <ol>
      <li>Integration with a real database (e.g., MongoDB, MySQL).</li>
      <li>Authentication and user roles.</li>
      <li>Search and filter functionalities for the user list.</li>
    </ol>
    <h2>Live Demo</h2>
    <ul>
      <li>The application is deployed on Netlify. You can access it here:</li>
      <a href="https://user00management.netlify.app/" >User Management App </a>
    </ul>