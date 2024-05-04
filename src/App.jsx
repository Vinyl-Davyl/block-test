import { useState } from "react";
import logo from "./logo.svg";

import {
  Login,
  Button,
  FormControl,
  Link,
  Search,
  Select,
  Skeleton,
  Spinner,
  TextInput,
  // Typography,
  // Avatar,
  // Card,
  // Modal,
  // Header,
} from "vinyl-component-blocks";
import styled from "styled-components";
import "./App.css";

const Container = styled.section`
  margin: 100px 0;
  display: block;
  align-items: center;
  justify-content: center;
`;

const user = {
  name: "John Doe",
};

// Define event handlers for login, logout, and create account actions
const handleLogin = () => {
  console.log("Logging in...");
};

const handleLogout = () => {
  console.log("Logging out...");
};

const handleCreateAccount = () => {
  console.log("Creating account...");
};

const handleSubmit = () => {
  console.log("submitted");
};

const handleClick = () => {
  console.log("clicked");
};
const handleBlur = () => {
  console.log("clicked");
};
const handleFocus = () => {
  console.log("clicked");
};

function App() {
  return (
    <Container>
      <Login
        onSubmit={handleSubmit}
        initialValues={{
          email: "example@example.com",
          password: "password123",
        }}
        loading={true}
        registerLink="https://vinyldavyl.xyz"
      />
      <Button
        type="default" // Specify the type of button: 'default', 'danger', 'ghost', or 'secondary'
        icon={""}
        // icon={YourIconComponent} // Provide the icon component to display alongside the button text
        size="default" // Specify the size of the button: 'default', 'large', or 'small'
        className="custom-class" // Optionally provide additional CSS classes for styling
        disabled={false} // Specify whether the button should be disabled
        loading={false} // Specify whether the button should display a loading spinner
        onClick={handleClick} // Provide the onClick event handler function
        href="https://example.com" // If the button should act as a link, provide the URL here
        as="button" // Optionally specify the HTML element type for the button (e.g., 'button', 'a')
        to="/path" // Provide the destination path for the link if using the 'as' prop
      >
        Button
      </Button>

      <FormControl
        label="Email" // Specify the label for the form control
        htmlFor="email" // Specify the 'for' attribute for the label
        error="Invalid email" // Specify the error message, if any
        hint="Enter your email address" // Specify a hint message, if any
        disabled={false} // Specify whether the form control is disabled
        className="custom-class" // Optionally provide additional CSS classes for styling
        onBlur={handleBlur} // Provide the onBlur event handler function
        onFocus={handleFocus} // Provide the onFocus event handler function
        forceLabel={false} // Specify whether to always show the label
      >
        <input type="text" id="email" />
      </FormControl>

      <Link
        className="custom-link" // Optionally provide additional CSS classes for styling
        disabled={false} // Specify whether the link is disabled
        as="a" // Specify the HTML element or React component to render as (default is 'a')
        href="https://example.com" // Specify the URL the link points to
      >
        Click here
      </Link>

      <Search
        className="custom-search" // Optionally provide additional CSS classes for styling
        size="default" // Specify the size of the search component
        width="100%" // Specify the width of the search component
        value="search text" // Specify the current value of the search input
        onChange={(e) => console.log(e.target.value)} // Specify the onChange event handler for the search input
        placeholder="Search here" // Specify the placeholder text for the search input
      />

      <Select
        className="custom-select" // Optionally provide additional CSS classes for styling
        size="default" // Specify the size of the select component
        disabled={false} // Specify whether the select is disabled
        error={false} // Specify whether the select has an error state
        width="200px" // Specify the width of the select component
        option={{ label: "Option 1", value: "option1" }} // Specify the selected option
        listOptions={[
          // Specify the list of available options
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
          { label: "Option 3", value: "option3" },
        ]}
        onChange={(option) => console.log(option)} // Specify the onChange event handler for the select component
        placeholder="Select an option" // Specify the placeholder text for the select component
      />

      <Skeleton
        className="custom-skeleton" // Optionally provide additional CSS classes for styling
        width={200} // Specify the width of the skeleton component
        height={20} // Specify the height of the skeleton component
        borderRadius="5px" // Specify the border radius of the skeleton component
      />

      <Spinner
        className="custom-spinner" // Optionally provide additional CSS classes for styling
        size={40} // Specify the size of the spinner
        light={false} // Optionally specify whether the spinner should be light
      />

      <TextInput
        className="custom-text-input" // Optionally provide additional CSS classes for styling
        icon={""}
        //icon={YourIconComponent} // Optionally provide an icon component
        size="large" // Specify the size of the input ("default", "small", "large")
        disabled={false} // Specify whether the input is disabled
        error={false} // Specify whether the input has an error state
        value="" // Specify the input value
        onChange={(e) => console.log(e.target.value)} // Handle input change event
        placeholder="Enter text here" // Specify the placeholder text
        width="200px" // Specify the width of the input
        readonly={false} // Specify whether the input is read-only
        clearable={true} // Specify whether the input is clearable
      />

      {/* Render H1 Typography */}
      {/* <Typography variant="h1" align="center">
        Heading 1
      </Typography> */}
      {/* <Avatar imageSrc="https://miro.medium.com/v2/resize:fit:740/1*ooOH6jo8I0ns0J-BE0SAow.jpeg" /> */}
      {/* Render Card with specified background color and padding */}
      {/* <Card backgroundColor="#f0f0f0" padding="20px">
        {/* Content of the card */}
      {/* <h2>Title</h2>
        <p>Card content goes here...</p>
      </Card> */}
      {/* Render the Modal component */}
      {/* <Modal>
        
        <h2>Title</h2>
        <p>Modal content goes here...</p>
      </Modal> */}

      {/* <Header
        user={user} // Pass the user object
        onLogin={handleLogin} // Pass the login event handler
        onLogout={handleLogout} // Pass the logout event handler
        onCreateAccount={handleCreateAccount} // Pass the create account event handler
      /> */}
    </Container>
  );
}

export default App;
