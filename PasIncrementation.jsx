function PasIncrementation({ pasInc, onChange }) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <h3>Le pas d'incrémentation :</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                    onClick={() => onChange(1)}
                    style={buttonStyle(pasInc === 1)}
                >
                    1
                </button>
                <button 
                    onClick={() => onChange(2)}
                    style={buttonStyle(pasInc === 2)}
                >
                    2
                </button>
                <button 
                    onClick={() => onChange(3)}
                    style={buttonStyle(pasInc === 3)}
                >
                    3
                </button>
                <button 
                    onClick={() => onChange(4)}
                    style={buttonStyle(pasInc === 4)}
                >
                    4
                </button>
            </div>
        </div>
    );
};
const buttonStyle = (isActive) => ({
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: '2px solid #ddd',
  borderRadius: '5px',
  backgroundColor: isActive ? '#2196F3' : '#fff',
  color: isActive ? '#fff' : '#333',
  transition: 'all 0.3s',
  fontWeight: isActive ? 'bold' : 'normal'
});
export default PasIncrementation;