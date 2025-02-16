import { useRef, useEffect, useState } from "react"

const Canvas = ({ selectedTool, brushColor, backgroundColor, clearTrigger, setFillMode }) => {

    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [drawing, setDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 800;
        canvas.height = 600;
        canvas.style.backgroundColor = backgroundColor

        const context = canvas.getContext('2d');
        context.lineCap = 'round';
        context.lineWidth = 5;
        context.strokeStyle = brushColor
        contextRef.current = context
    },[])

    useEffect(() => {
        if (clearTrigger) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [clearTrigger]);

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.style.backgroundColor = backgroundColor;
            setFillMode(false);
        }
    },[backgroundColor])

    const startDrawing = ({nativeEvent}) => {
        if (selectedTool === 'pencil' || selectedTool === 'eraser'){
            const { offsetX, offsetY } = nativeEvent;
            contextRef.current.beginPath();
            contextRef.current.moveTo(offsetX, offsetY);
            setDrawing(true);
        }
        
    };

    const stopDrawing = () => {
        contextRef.current.closePath();
        setDrawing(false);
    };

    const draw = ({nativeEvent}) => {
        if (!drawing) return;
        const { offsetX, offsetY } = nativeEvent;

        if (selectedTool === 'eraser') {
            contextRef.current.strokeStyle = backgroundColor;
            contextRef.current.lineWidth = 20;
        } else {
            contextRef.current.strokeStyle = brushColor;
            contextRef.current.lineWidth = 5;
        }

        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    }
    
    
    return (
        <canvas 
            ref={canvasRef}
            onMouseDown={startDrawing} 
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            style={{ border: '1px solid black', width: "100%"}}
        />
    );
};
export default Canvas