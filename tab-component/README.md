# 🧩 React Tab Component

A simple and commonly used tab component implementation in React, useful for organizing and displaying content dynamically within a single page.

## 🔧 Features

- **Dynamic tab switching** using React's `useState` hook
- **Tabs passed as props** to the component
- Clean and minimal **Tailwind CSS** styling
- Modular and reusable design

## 📦 How It Works

- The parent component passes an array of tab objects to the `Tab` component.
- Each tab contains a `label` and `content`.
- The `Tab` component uses `useState` to track the currently active tab.
- On clicking a tab, the content updates in real-time without a page refresh.

## 📁 Example Usage

```jsx
import Tab from "./components/Tab";

const tabs = [
  { label: "Home", content: "Welcome to the Home page!" },
  { label: "About", content: "Learn more About us here." },
  { label: "FAQ", content: "Frequently Asked Questions." },
];

function App() {
  return (
    <div className="App">
      <Tab tabs={tabs} />
    </div>
  );
}
