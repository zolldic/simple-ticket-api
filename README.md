# Backend Documentation
### Overview

> the backend system is designed to manage ticket sales, purchases, and verification for events. It supports QR code-based ticket validation, online payments, and customized PDF ticket generation. The app differentiates between two user roles: Users (who buy tickets) and Organizers (who sell tickets and manage events).


### User Stories
1. **User Registration and Login**: As a user, I want to register and log in so that I can buy tickets securely.
2. **Browse Events**: As a user, I want to browse available events so that I can decide which event to attend.
3. **Purchase Tickets**: As a user, I want to purchase tickets for an event so that I can attend it.
4. **View Order History**: As a user, I want to view my past orders so that I can keep track of the events I've attended.
5. **Secure Payment**: As a user, I want to make payments securely so that my financial information is safe. 

### Key Features
- QR Code Generation: Unique QR code generation at the time of purchase to prevent ticket fraud.
- Customizable PDF Tickets: Custom templates for ticket appearance, downloadable upon purchase.
- User and Organizer Roles: Role-specific functionalities secured by authentication.


### Functionality
1. Sell Tickets for an Event: Organizers can create events and sell tickets using customizable templates.
2. Buy Tickets for an Event: Users can purchase tickets through the app.
3. Download Ticket: Users can download purchased tickets in a PDF format.
4. Verify Ticket: Organizers can validate tickets using QR codes.
5. Authentication: Secure login and signup for both Users and Organizers.
6. Online Payment: Integrated payment system for secure ticket transactions.

### Services / Logic
1. **Buy/Sell Functionality**: Manages the purchase and sale of tickets, including updating event and ticket records.
2. **Generate/Download PDF Functionality**: Generates customized PDF tickets and allows users to download them after purchase.
3. **Online Payment Functionality**: Integrates a payment gateway for secure transactions.
4. **Validate Tickets Functionality**: Ensures ticket authenticity by verifying QR codes against stored data.


### Methods 
##### Global Methods
- **Login Method**: Authenticate users and organizers/busniess.
- **Signup Method**: Register new users or organizers.
- **Generate Ticket Method**: Generate and store a PDF ticket with a unique QR code.

##### User Methods
- **Buy Tickets Method**: Allow users to purchase tickets for events.
- **Pay for Tickets Method**: Process payments through the online payment system.
- **Download Ticket Method**: Provide downloadable PDF tickets.

##### Organizer/Busniess Methods
- **Create Event Method**: Create and manage events.
- **Validate Ticket Method**: Verify tickets using QR codes.

### APIs
1. Authentication Endpoints
	- POST /api/auth/login: Authenticate a user or organizer.
	- POST /api/auth/signup: Register a new user or organizer.
2. Buy Endpoint
	- POST /api/tickets/buy: Buy tickets for an event.
3. Sell Endpoint
	- POST /api/events/create: Create a new event.
	- POST /api/tickets/validate: Validate a ticket using its QR code.


### Concepts
- Separation of Concerns (SoC): Keep different aspects of the application (models, controllers, services) in separate directories.
- Modularity: Use services to encapsulate business logic, making it reusable and easy to test.
- Single Responsibility Principle (SRP): Each file or module should have a single, well-defined responsibility.


- **Nodejs**: non-blocking, event-driven architecture, and the vast ecosystem of libraries and frameworks available
- **TypeScript**: statically typed superset of JavaScript, ability to catch errors during development and provide better tooling and autocompletion 
- **Documentation layer**: swagger or openapi.
