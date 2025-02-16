import { useState, useEffect } from "react"

export default function Chatbox(){

    const [ message, setMessage ] = useState("");
    const [ messages, setMessages ] = useState([]);
    const [ socket, setSocket ] = useState(null);

    useEffect(() =>{
        const newSocket = new WebSocket("ws://localhost:8765");
        setSocket(newSocket);

        newSocket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        return () => newSocket.close();
    }, []);

    const sendText = () => {
        if (message.trim != "" && socket){
            socket.send(message);
            setMessage("")
        }
    }

    return (
        <div
          style={{
            width: "300px",
            border: "1px solid black",
            padding: "10px",
            height: "90vh", // Adjusted height
            display: "flex",
            flexDirection: "column",
            margin: '5px'
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
            <input type="text" style={{ flex: 1, padding: "5px" }} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={sendText} style={{ padding: "5px" }}>
              Send
            </button>
          </div>
        </div>
      );
}