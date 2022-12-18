import {formatNumber} from '../../utils/utils';

type DegreesCelsiusProps = {
  degrees: number;
}

const DegreesCelsius = ({degrees}: DegreesCelsiusProps) => {
  return (
    <>
      <span className="font-bold">{formatNumber(degrees)}</span>°
    </>
  );
}

export default DegreesCelsius;

