import { Header } from "./components/Header";
import { Footer } from "./components/Foorter";
import { Sidebar } from "./components/Sidebar";
import { Taskinput } from "./components/Taskinput";
import { Task } from "./components/Task";
function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Thanpisit" type="student"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <h1>Thanpisit Noonting</h1>
            <Taskinput></Taskinput>
            {/* Card รายการ */}
            <Task id={1} title="Read a book" description="Vite + React + Bootstrap + TS" isDone={true}></Task>
            <Task id={2} title="Write code" description="Finish project for class" isDone={true}></Task>
            <Task id={3} title="Deploy app" description="Push project to GitHub Pages" isDone={true}></Task>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName="Thanpisit Noonting" studentId="670610705"></Footer>
    </div>
  );
}

export default App;