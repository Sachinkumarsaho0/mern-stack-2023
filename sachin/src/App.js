import React, { useState } from "react";
function App() {
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    password: " ",
  });
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/biodata", {
      method: "POST",
      body: form,
    });
    console.log(res);
  }
  return (
    <div>
      Hello World
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleInput}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Enter your email "
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter your password"
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
