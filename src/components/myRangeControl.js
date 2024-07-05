import { Button, RangeControl, SelectControl } from "@wordpress/components";

const MyRangeControl = (props) => {
    const { attributes, attributesKey, setAttributes, label, min, max, step, units } = props;

    const onChangeRangeValue = (value) => {
        setAttributes({
            [attributesKey]: {
                ...attributes[attributesKey],
                value: value,
            },
        });
    };

    return (
        <div className="my-range-control">
            <div className="my-range-control-header-area">
                <label className="my-range-control-label">{label}</label>
                {units && <div className='ppb-units'>
                            <span>{attributes[attributesKey].unit}</span>
                            <div className='ppb-units-btn'>
                                {units.map((item, i)=>(
                                    <Button className="each-unit-btn" key={i}> {item} </Button>
                                ))}
                            </div>
                        </div>}
            </div>
            <RangeControl
                value={attributes[attributesKey].value}
                onChange={onChangeRangeValue}
                min={min}
                max={max}
                step={step}
            />
        </div>
    );
};

export default MyRangeControl;
