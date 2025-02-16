import asyncio
import websockets

connected_clients = set()

async def handle_client(websocket):
    """Handles an incoming WebSocket connection."""
    connected_clients.add(websocket)
    print(f"🔵 New client connected. Total clients: {len(connected_clients)}")

    try:
        async for message in websocket:
            print(f"📩 Received: {message}")
            # Broadcast message to all connected clients
            await asyncio.gather(*(client.send(message) for client in connected_clients))
    except websockets.exceptions.ConnectionClosed:
        print("🔴 Client disconnected")
    finally:
        connected_clients.remove(websocket)
        print(f"🟠 Client removed. Remaining: {len(connected_clients)}")

async def main():
    """Starts the WebSocket server."""
    async with websockets.serve(handle_client, "localhost", 8765):
        print("✅ WebSocket server is running on ws://localhost:8765")
        await asyncio.Future()  # Keep running

asyncio.run(main())
