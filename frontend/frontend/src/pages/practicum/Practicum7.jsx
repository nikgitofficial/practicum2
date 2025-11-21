import React, { useRef, useState } from "react";
import {Link} from "react-router-dom";
import { Box, Button, Slider, Typography, Stack } from '@mui/material';
import jsPDF from 'jspdf';

// Practicum7: Next-Level Signature Pad with Material-UI and PDF export
export default function Practicum7() {
  const [strokes, setStrokes] = useState([]);
  const [currentStroke, setCurrentStroke] = useState([]);
  const [penColor, setPenColor] = useState('#000000');
  const [penWidth, setPenWidth] = useState(2);
  const svgRef = useRef(null);

  

  const handlePointerDown = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setCurrentStroke([point]);
  };

  const handlePointerMove = (e) => {
    if (currentStroke.length === 0) return;
    const rect = svgRef.current.getBoundingClientRect();
    const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setCurrentStroke([...currentStroke, point]);
  };

  const handlePointerUp = () => {
    if (currentStroke.length > 0) {
      setStrokes([...strokes, { points: currentStroke, color: penColor, width: penWidth }]);
      setCurrentStroke([]);
    }
  };

  const handleUndo = () => setStrokes(strokes.slice(0, -1));
  const handleClear = () => { setStrokes([]); setCurrentStroke([]); };

  const exportSVG = () => {
    const svg = svgRef.current;
    if (!svg) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'signature.svg';
    a.click();
  };

  const exportPDF = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [canvas.width, canvas.height] });
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('signature.pdf');
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <Box maxWidth={600} mx="auto" p={3}>
      <Typography variant="h5" mb={2}>Next-Level 2028 Signature Pad</Typography>
      <Link to="/">Home</Link>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={2} alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Color</Typography>
          <input type="color" value={penColor} onChange={e => setPenColor(e.target.value)} />
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ width: 150 }}>
          <Typography>Width</Typography>
          <Slider value={penWidth} onChange={(e, val) => setPenWidth(val)} min={1} max={10} size="small" />
          <Typography>{penWidth}</Typography>
        </Stack>

        <Button variant="outlined" color="secondary" onClick={handleUndo}>Undo</Button>
        <Button variant="outlined" color="error" onClick={handleClear}>Clear</Button>
        <Button variant="contained" color="primary" onClick={exportSVG}>Export SVG</Button>
        <Button variant="contained" color="success" onClick={exportPDF}>Export PDF</Button>
      </Stack>

      <Box sx={{ border: '1px solid #ccc', borderRadius: 1, overflow: 'hidden' }}>
        <svg
          ref={svgRef}
          width="100%"
          height={400}
          style={{ touchAction: 'none', backgroundColor: '#fdfdfd' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {strokes.map((stroke, i) => (
            <polyline
              key={i}
              points={stroke.points.map(p => `${p.x},${p.y}`).join(' ')}
              stroke={stroke.color}
              strokeWidth={stroke.width}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {currentStroke.length > 0 && (
            <polyline
              points={currentStroke.map(p => `${p.x},${p.y}`).join(' ')}
              stroke={penColor}
              strokeWidth={penWidth}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </Box>
    </Box>
  );
}