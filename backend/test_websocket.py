import asyncio
import websockets

async def test_websocket():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        print("✅ Connected to server")

        # Send a test message
        message = "Hello WebSocket Server!"
        await websocket.send(message)
        print(f"📤 Sent: {message}")

        # Receive response
        response = await websocket.recv()
        print(f"📩 Received: {response}")

# Run the test client
asyncio.run(test_websocket())
