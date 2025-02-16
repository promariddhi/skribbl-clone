import Pallete from "./Pallete"

export default function Toolbar({ setSelectedTool, setBrushColor, setBackgroundColor, clearCanvas, setFillMode, fillMode }){
    function pencilTool(){setSelectedTool('pencil')}
    function eraserTool(){setSelectedTool('eraser')}
    function fillColorTool(){setFillMode(!fillMode); console.log(fillMode)}
    function trashTool(){clearCanvas()}
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{display: 'flex', gap: '10px'}}>
                <button style={{backgroundImage: 'url(/src/assets/icons8-pencil-50.png)',
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'cover',}}
                        onClick={pencilTool}
                />
                <button style={{backgroundImage: 'url(/src/assets/icons8-eraser-50.png)',
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'cover',}}
                        onClick={eraserTool}
                />
                <button style={{backgroundImage: 'url(/src/assets/icons8-fill-color-50.png)',
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'cover',}}
                        onClick={fillColorTool}
                />
                <button style={{backgroundImage: 'url(/src/assets/icons8-trash-50.png)',
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'cover',}}
                        onClick={trashTool}
                />
            </div>
            <Pallete fillMode={fillMode} setBrushColor={setBrushColor} setBackgroundColor={setBackgroundColor}/>
        </div>
    )
}