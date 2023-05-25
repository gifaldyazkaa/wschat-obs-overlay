export default function useWsChat(id: string, onMessage: (data: any) => void) {
    const ws = new WebSocket(`wss://wschat.falcxxdev.cyou/api/livechat?liveId=${id}`);
    ws.addEventListener('error', console.error);
    ws.addEventListener('message', ({ data }) => {
        onMessage(JSON.parse(data));
    });
}
