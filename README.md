# Comprass - E-commerce App Documentation

Welcome to the documentation for the Compras E-commerce app. This document provides an overview of the project, its functionalities, design, and guidelines for development. Please read this document carefully before starting work on the project.

## Description

Compras is an e-commerce app that aims to provide a seamless shopping experience. It includes features such as product search, shopping cart management, and a streamlined purchase process. This project is meant to be implemented by a group of students, with a chosen leader to coordinate efforts.

## Design and API

- **Design**: The design for Compras can be found on Figma [here](https://www.figma.com/file/MfojKHCTpkG1nvhSrzDSEH/Comprass-E-Commecer?type=design&node-id=0-1&mode=design&t=18Ccdl905V67J2wU-0).
- **API**: The API for product information can be accessed at [https://fakeapi.platzi.com/en/rest/products](https://fakeapi.platzi.com/en/rest/products).

## Functionalities

### 1. Splash Screen

- Upon entering the app, users will go through a loading splash screen to check if they have an active session.
- Users with an active session will be directed to the logged-in home area, while those without a session will still access the home page with some features disabled.
- Ensure that the user's session status is saved locally to maintain state across app launches.

### 2. Home

- Users can search for products by name.
- Clicking on a product will navigate to its details.
- Implement infinite scrolling to display products until reaching the limit of the API.
- Ensure that the cart counter does not go below 0.
- Products should disappear from the cart if the counter reaches 0.

### 3. Profile

- Logged-in users can edit their profile information, and log out.
- Logging out should clear user data, including the authentication token.

### 4. Cart

- Users, whether logged in or logged out, can view and manage items in their cart.
- They can delete or edit the quantity of items in the cart.
- Ensure that the cart counter does not go below 0.
- Items should remain in the cart even if the counter reaches 0; they can only be removed via the delete button.
- Clicking on "BUY" should direct logged-in users to the Checkout area, while logged-out users receive a warning to log in.

### 5. Checkout

- In the Checkout area, users must enter their address, including zip code.
- Implement an API to automatically populate address fields based on the zip code. Users can edit these fields (VIACEP).
- Allow users to add the address even if the zip code is incorrect.
- The zip code API should trigger searches when the full zip code is successfully completed.
- Provide three payment methods: PIX, credit card, and bank slip.
- Users must choose their delivery method. This method is static and does not require an API.

### 6. Success Screen

- Display a success screen based on the selected payment method.
- Ensure that no sensitive data of any individuals is displayed on any screen.




## Conclusion

The Compras E-commerce app project offers a great learning opportunity and a chance to apply your React Native and Typescript skills. Please adhere to the guidelines provided and make sure to document your code properly. If you have any questions or need clarification, contact the instructor at rafael.colares@compasso.com.br.

Let's get started with the development of Compras and make it a success! 🛒📲🛍️

![Let the game begin!](https://prod-files-secure.s3.us-west-2.amazonaws.com/0e35a520-7750-4691-9b64-a2bc2406d078/f7f27b2c-a0d5-46d4-8e4d-f398640e3458/let-the-game-begin-jigsaw.gif)
