import LeaveFeedback from './LeaveFeedback/LeaveFeedback';



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <LeaveFeedback good={0} neutral={0} bad={0}/>
      
    </div>
    
  );
};
