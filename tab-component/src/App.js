import Tab from "./components/Tab";

function App() {
    const Tabs = [
        { label: "Home", content: "Home page" },
        { label: "About", content: "About page" },
        { label: "Faq", content: "FaQ page" },
    ];
    return (
        <div className="App bg-blue-950">
            <Tab tabs={Tabs} />
        </div>
    );
}

export default App;
