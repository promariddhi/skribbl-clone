export default function Pallete({ fillMode, setBrushColor, setBackgroundColor }){
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFD700', '#800080','#00FFFF','#FF69B4','#708090','#8B4513','#00FF00','#FF4500','#000000']
    function setColor(color){
        if(fillMode) setBackgroundColor(color)
        else setBrushColor(color)
    }
    return (
        <div style={{ display: 'flex', gap: '1px' }}>
            {colors.map((color) => (
                <button
                key={color}
                style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: color,
                    border: 'none',
                    cursor: 'pointer',
                }}
                onClick={() => setColor(color)}
                />
            ))}
        </div>
    )
}