import { Vortex } from 'react-loader-spinner';
import css from './Spiner.module.css';

const Spiner = () => {
  return (
    <div className={css.spiner}>
      <Vortex
        visible={true}
        height="200"
        width="200"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};

export default Spiner;
