import { useState, useEffect } from "react"

export default function Chatbox(){
    function sendMessage(){}
    const messages = []
    return (
        <div
          style={{
            width: "300px",
            border: "1px solid black",
            padding: "10px",
            height: "90vh", // Adjusted height
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1, // Makes message area take up all available space
              overflowY: "auto",
              marginBottom: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <div key={index} style={{ background: "#f1f1f1", margin: "5px 0", padding: "5px" }}>
                {msg}
              </div>
            ))}
          </div>
    
          <div style={{ display: "flex", gap: "5px" }}>
            <input type="text" style={{ flex: 1, padding: "5px" }} />
            <button onClick={sendMessage} style={{ padding: "5px" }}>
              Send
            </button>
          </div>
        </div>
      );
}