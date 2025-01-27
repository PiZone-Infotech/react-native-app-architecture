# Project Structure

This repository is designed to help developers start their applications with a clean and scalable architecture. The structure ensures ease of maintenance, testing, and scalability.

## Key Features

- **Built with TypeScript:** Ensures type safety and prevents common coding errors.
- **Uses Redux Toolkit and Saga:** Efficient state management with modern tools.
- **Persist Storage with AsyncStorage:** State is persisted using AsyncStorage for seamless user experience.
- **Modular Structure:** Well-organized folders for easy navigation and scalability.

## Folder Structure

```
app/
|-- assets/
|
|-- components/
|   |-- cache-image/
|   |   |-- index.tsx
|   |   |-- styles.tsx
|   |-- label/
|   |   |-- index.tsx
|   |   |-- styles.tsx
|   |-- loader/
|   |   |-- index.tsx
|   |   |-- styles.tsx
|   |-- screen/
|       |-- index.tsx
|       |-- styles.tsx
|
|-- configs/
|   |-- index.tsx
|
|-- constants/
|   |-- images.tsx
|   |-- index.tsx
|   |-- strings.tsx
|
|-- global/
|   |-- flash-message/
|   |-- loader/
|   |-- index.tsx
|
|-- helpers/
|   |-- auth-token.tsx
|   |-- index.tsx
|   |-- navigation-service.tsx
|   |-- utils.tsx
|
|-- modules/
|   |-- app-bootstrap/
|   |-- auth/
|   |-- common/
|
|-- navigator/
|   |-- constants.tsx
|   |-- index.tsx
|   |-- mainStack.tsx
|   |-- root-navigation.tsx
|
|-- redux/
|   |-- index.tsx
|   |-- root-reducer.tsx
|   |-- root-saga.tsx
|   |-- store.tsx
|
|-- service/
|   |-- endpoints.tsx
|   |-- http-service.tsx
|   |-- index.tsx
|
|-- styles/
|   |-- colors.tsx
|   |-- index.tsx
|   |-- sizing.tsx
|   |-- theme-provider.tsx
|   |-- themes.tsx
|   |-- typography.tsx
|
|-- main.tsx
|-- babel.config.js
|-- index.js
|-- run-android.sh
|-- tsconfig.json
```

## Highlights of the Architecture

1. **Redux Toolkit and Saga:**
   - State management is handled with Redux Toolkit for simplicity and performance.
   - Side effects are managed using Redux-Saga for better control and scalability.

2. **Persist State with AsyncStorage:**
   - The Redux store state is persisted using AsyncStorage, ensuring the app retains state across sessions.

3. **Modular Components:**
   - Each component is self-contained, with separate `index.tsx` and `styles.tsx` files for better modularity.

4. **Reusable Utilities:**
   - Helper functions for tasks like authentication tokens and navigation services are centralized in the `helpers/` folder.

5. **Navigation Setup:**
   - `navigator/` folder contains stack navigators and root navigation setup for consistent routing.

6. **Theming and Styling:**
   - Global styles, theming, and typography are handled in the `styles/` folder for consistent design.

## Installation

1. Clone this repository:
   ```bash
   git clone <your-github-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. To run on Android:
   ```bash
   ./run-android.sh
   ```

## Usage

- Modify or add new components under the `components/` folder.
- Add new Redux slices or sagas in the `redux/` folder.
- Add API endpoints and related logic in the `service/` folder.
- Manage navigation in the `navigator/` folder.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
