import { RangeSlider } from './RangeSlider';
import './range-slider.css';


interface RangeSliderProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
  }
  
  /**
   * Primary UI component for user interaction
   */
  export const RangeSlider = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
  }: RangeSliderProps) => {

    const mode = primary ? 'storybook-range-slider--primary' : 'storybook-range-slider--secondary';
    
    return (
      <button
        type="button"
        className={['storybook-range-slider', `storybook-range-slider--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    );
  };