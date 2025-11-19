function Valeur({ counter }) {
  return (
    <div style={{
      padding: '20px',
      fontSize: '48px',
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      margin: '20px 0',
      textAlign: 'center'
    }}>
      {counter}
    </div>
  );
};

export default Valeur;