import { ResetIcon } from '../controls/svgIcon';
import Responsive from "./responsive";
import {
    Button,
} from '@wordpress/components';
import { useDeviceType } from '../controls/controls';
import { SpacingControlIcon, SpacingControlActiveIcon } from '../controls/svgIcon';

const Spacing = ({label, attributes, attributesKey, setAttributes, units, linkButton = true, labelItem = {
    'top': __('Top', 'ppb'),
    'right': __('Right', 'ppb'),
    'bottom': __('Bottom', 'ppb'),
    'left': __('Left', 'ppb')
}, defaultValue = {'unit': 'px', 'value': {
    'top': '0',
    'right': '0',
    'bottom': '0',
    'left': '0',
}}, boxUnits= false, customSize = false}) => {

    const deviceType = useDeviceType();

    const SpacingAllChangeIcon = attributes?.allChange ? <SpacingControlActiveIcon /> : <SpacingControlIcon />;

    const value = attributes?.device ? attributes?.device[deviceType] : attributes;

    const setSpacingData = (newValue, typeKey) => {
        if(attributes.device && !attributes.allChange) {
            setAttributes({[attributesKey]: {...attributes, 'device': {...attributes?.device, [deviceType]: {...attributes?.device[deviceType], [typeKey]: newValue }}}})
        }
        if(!attributes?.device && !attributes?.allChange) {
            setAttributes({[attributesKey]: {...attributes, [typeKey]: newValue}})
        }
        
        if(attributes?.device && attributes?.allChange) {
            let data = {
                ...attributes?.device[deviceType],
                'top': newValue,
                'right': newValue,
                'bottom': newValue,
                'left': newValue
            }
            setAttributes({[attributesKey]: {...attributes, 'device': {...attributes.device, [deviceType]: data}}})
        }

        if(!attributes?.device && attributes?.allChange) {
            let data = {
                ...attributes,
                'top': newValue,
                'right': newValue,
                'bottom': newValue,
                'left': newValue
            }
            setAttributes({[attributesKey]: data})
        }
    }

    const setDefaultValue = () => {
        if(attributes?.device) {
            let data = {
                ...attributes.device[deviceType],
                'top': defaultValue?.value?.top,
                'right': defaultValue?.value?.right,
                'bottom': defaultValue?.value?.bottom,
                'left': defaultValue?.value?.left
            }
            setAttributes({[attributesKey]: {...attributes, 'device': {...attributes?.device, [deviceType]: data},  'unit': {
                ...attributes.unit,
                [deviceType]: defaultValue?.unit
            }}})
        }else{
            let data = {
                ...attributes,
                'top': defaultValue?.value?.top,
                'right': defaultValue?.value?.right,
                'bottom': defaultValue?.value?.bottom,
                'left': defaultValue?.value?.left
            }
            setAttributes({[attributesKey]: data, 'unit': {
                ...attributes.unit,
                [deviceType]: defaultValue?.unit
            }})
        }
    }

    // Set unit function.
    const setUnit = (newValue) => {
        setAttributes({ [attributesKey]: { ...attributes, 'unit': {
            ...attributes.unit,
            [deviceType]: newValue.toLowerCase()
        }}});
    }

    // When the reset button active & unActive.
    const activeResetButton = () => {
        if(defaultValue?.unit !== attributes?.unit || JSON.stringify(defaultValue.value) != JSON.stringify( value )) {
            return 'active'
        }
        return ''
    }

    return(
        <>
            <div className="ppb-spacing">
                <div className='ppb-spacing-part-1'>
                    <div className='my-range-control-header-area'>
                        <div className='left-area'>
                            <label className='my-range-control-label'>{label}</label>
                            {attributes?.device && <Responsive />}
                        </div>
                        <div className='right-area'>
                            <Button onClick={() => setDefaultValue()} className={`ppb-header-control-reset ${activeResetButton()}`}> 
                                <ResetIcon />
                            </Button>
                            <div className={`ppb-units ${boxUnits ? 'box' : '' }`}>
                                <span className={boxUnits ? 'box-unit' : ''}>{( 'object' !== typeof attributes.unit) ? attributes?.unit : attributes.unit[deviceType]}</span>
                                <div className='ppb-units-btn'>
                                    {units.map((item, i)=>(
                                        <Button className={attributes?.unit[deviceType] === item.toLowerCase() ? 'active' : ''} key={i} value={item} onClick={(e) => setUnit(e.target.value)}> {item} </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ppb-spacing-part-2'>
                    {!customSize && <>
                        <div className="ppb-spacing-top">
                            <input id='ppb-spacing-top' onChange={(e) => setSpacingData(e.target.value, 'top')} type='number' value={value?.top} />
                            <label htmlFor='ppb-spacing-top'>{labelItem.top}</label>
                        </div>
                        <div className="ppb-spacing-right">
                            <input id='ppb-spacing-right' onChange={(e) => setSpacingData(e.target.value, 'right')} type='number' value={value?.right} />
                            <label htmlFor='ppb-spacing-right'>{labelItem?.right}</label>
                        </div>
                        <div className="ppb-spacing-bottom">
                            <input id='ppb-spacing-bottom' onChange={(e) => setSpacingData(e.target.value, 'bottom')} type='number' value={value?.bottom} />
                            <label htmlFor='ppb-spacing-bottom'>{labelItem?.bottom}</label>
                        </div>
                        <div className={`ppb-spacing-left ${!linkButton ? 'box' : ''}`}>
                            <input id='ppb-spacing-left' onChange={(e) => setSpacingData(e.target.value, 'left')} type='number' value={value?.left} />
                            <label htmlFor='ppb-spacing-left'>{labelItem?.left}</label>
                        </div>
                        {linkButton && <div className={`ppb-spacing-all`}>
                            <Button className={attributes?.allChange ? 'active' : ''} onClick={() => setAttributes( {[attributesKey]: {...attributes, 'allChange': !attributes?.allChange }} )}>
                                {SpacingAllChangeIcon}
                            </Button>
                        </div>}
                    </>}
                    {customSize && <>
                        <div className="ppb-spacing-top">
                            <input id='ppb-spacing-top' onChange={(e) => setSpacingData(e.target.value, 'top')} type='number' value={value?.top} placeholder='auto' min={0} />
                            <label htmlFor='ppb-spacing-top'>{labelItem.top}</label>
                        </div>
                        <div className={`ppb-spacing-right ${!linkButton ? 'box' : ''}`}>
                            <input id='ppb-spacing-right' onChange={(e) => setSpacingData(e.target.value, 'right')} type='number' value={value?.right} placeholder='auto' min={0} />
                            <label htmlFor='ppb-spacing-right'>{labelItem?.right}</label>
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}

export default Spacing;