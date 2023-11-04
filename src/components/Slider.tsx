'use client'

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
    value?: number;
    onChange?: (value: number) => void;
};

const Slider: React.FC<SliderProps> = ({value = 1, onChange}) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  }

  return (
    <RadixSlider.Root 
        defaultValue={[1]}
        value={[value]}
        onValueChange={handleChange}
        max={1}
        step={0.1}
        aria-label="Volume"
        className="relative flex items-center w-full h-10 select-none touch-none"
    >
        <RadixSlider.Track className="group relative grow rounded-full h-1 bg-neutral-600">
            <RadixSlider.Range className="absolute rounded-full h-full bg-white group-hover:bg-green-500" />
        </RadixSlider.Track>
    </RadixSlider.Root>
  )
}

export default Slider