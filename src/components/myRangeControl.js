import { Button, RangeControl, SelectControl } from "@wordpress/components";
import { useDeviceType } from "../controls/controls";
import Responsive from "./responsive";

const MyRangeControl = (props) => {

    const { attributes, attributesKey, setAttributes, label, units, min = 0, max = 200, step = 1, defaultValue = {unit: 'px', value: 10} } = props;

    const deviceType = useDeviceType();

    const value = attributes?.device ? attributes?.device[deviceType] : attributes?.value;

    // Ranger value set function.
    const setValue = (newValue) => {
        // It's multiple device (desktop/tablet/mobile).
        if(attributes.device) {
            setAttributes({ [attributesKey]: { ...attributes, 'device': { ...attributes.device,
                    [deviceType]: newValue
                }}
            });
        }
         // It's single device (desktop)
        if( 'number' === typeof attributes.value) {
            setAttributes({ [attributesKey]: { ...attributes, 'value': newValue}});
        }
    };

    // Set unit function.
    const setUnit = (newValue) => {
        setAttributes({ [attributesKey]: { ...attributes, 'unit': {...attributes.unit, [deviceType]: newValue.toLowerCase()}}});
    };

    // Set default value function and reset.
    const setDefault = () => {
        // It's multiple device (desktop/tablet/mobile).
        if(attributes.device) {
            setAttributes({ [attributesKey]: { ...attributes, 'device': { ...attributes.device,
                    [deviceType]: defaultValue.value
                },
                'unit': {
                    ...attributes.unit,
                    [deviceType]: defaultValue.unit
                }
            }});
        }
        // It's single device (desktop)
        if( 'number' === typeof attributes.value) {
            setAttributes({ [attributesKey]: { ...attributes, 'value': defaultValue.value, 'unit': defaultValue.unit}});
        }
    };

    // When the reset button active & unActive.
    const activeResetButton = () => {
        if('object' === typeof attributes?.unit && defaultValue?.unit[deviceType] !== attributes?.unit[deviceType] || defaultValue?.value !== parseIn(value)) {
            return 'active'
        }
        return ''
    };
    
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
                {attributes.device && <Responsive />}

                {units && <div className='ppb-units'>
                            <span>{( 'object' !== typeof attributes.unit) ? attributes?.unit : attributes.unit[deviceType]}</span>
                            <div className='ppb-units-btn'>
                                {units.map((item, i)=>(
                                    <Button className={attributes.unit[deviceType] === item.toLowerCase() ? 'active' : ''} key={i} value={item} onClick={(e) => setUnit(e.target.value)}> {item} </Button>
                                ))}
                            </div>
                        </div>}
            </div>
            <RangeControl
                value={ value }
                onChange={ ( newValue ) =>  setValue( newValue )}
                min={ min }
                max={ ( 'object' === typeof attributes?.unit && '%' === attributes?.unit[deviceType] ) ? 100 : max }
                step={ step }
            />
        </div>
    );
};

export default MyRangeControl;
