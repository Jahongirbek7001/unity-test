import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {
    percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
    return (
        <div style={{ width: '60px', height: '60px' }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    pathColor: `#9370DB`,
                    textColor: '#000',
                    trailColor: '#d6d6d6',
                })}
            />
        </div>
    );
}

export default CircularProgress;