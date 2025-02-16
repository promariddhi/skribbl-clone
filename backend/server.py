import asyncio
import websockets

connected_clients = set()

async def handle_client(websocket, path):
    connected_clients.add(websocket)

    try:
        async for message in websocket:
            await asyncio.wait([client.send(message) for client in connected_clients])
    except websockets.exceptions.ConnectionClosed:
        pass
    finally:
        connected_clients.remove(websocket)

async def main():
    async with websockets.serve(handle_client, "localhost", 8765):
        print("server running")
        await asyncio.Future()

asyncio.run(main())
