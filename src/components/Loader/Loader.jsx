import { Puff } from 'react-loader-spinner';

export default function Loader() {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <div style={style}>
      <Puff
        visible={true}
        height="50"
        width="50"
        color="#ac86ee"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
