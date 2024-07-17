import { useState } from "@wordpress/element";
import MyRangeControl from "./myRangeControl";
import { SelectControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';

const Typography = (props) => {
  const { attributes, setAttributes, fontSize, fontFamily, fontWeight, fontSizeKey } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const fontFamilyOptions = [
    { label: 'Arial', value: 'Arial, sans-serif' },
    { label: 'Helvetica', value: 'Helvetica, sans-serif' },
    { label: 'Times New Roman', value: '"Times New Roman", Times, serif' },
    { label: 'Courier New', value: '"Courier New", Courier, monospace' },
    { label: 'Verdana', value: 'Verdana, sans-serif' },
    { label: 'Georgia', value: 'Georgia, serif' },
    { label: 'Palatino', value: '"Palatino Linotype", "Book Antiqua", Palatino, serif' },
    { label: 'Tahoma', value: 'Tahoma, sans-serif' },
    { label: 'Trebuchet MS', value: '"Trebuchet MS", Helvetica, sans-serif' },
    { label: 'Impact', value: 'Impact, Charcoal, sans-serif' },
    { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
    { label: 'Lucida Sans Unicode', value: '"Lucida Sans Unicode", "Lucida Grande", sans-serif' },
    { label: 'Arial Black', value: '"Arial Black", Gadget, sans-serif' },
    { label: 'Gill Sans', value: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' },
    { label: 'Geneva', value: 'Geneva, sans-serif' },
    { label: 'Calibri', value: 'Calibri, sans-serif' },
    { label: 'Candara', value: 'Candara, sans-serif' },
    { label: 'Optima', value: 'Optima, sans-serif' },
    { label: 'Cambria', value: 'Cambria, Georgia, serif' },
    { label: 'Baskerville', value: 'Baskerville, "Times New Roman", serif' },
    { label: 'Garamond', value: 'Garamond, serif' },
    { label: 'Bookman', value: 'Bookman, serif' },
    { label: 'Avant Garde', value: '"Avant Garde", sans-serif' }
  ];

  const fontWeightOptions = [
    { label: '300', value: '300' },
    { label: '400', value: '400' },
    { label: '500', value: '500' },
    { label: '600', value: '600' },
    { label: '700', value: '700' },
    { label: '800', value: '800' }
  ];

  return (
    <div className="ppb-editor-typography">
      <div className="ppb-editor-typography-header">
        <p className="product-parade-block-sidebar-label-text">Typography</p>
        <button className={isOpen ? "active" : ""} onClick={toggleDropdown}>T</button>
      </div>
      <div className={isOpen ? "typography-area open" : "typography-area"}>
        { fontSize &&
        <MyRangeControl
          label={__('Font Size', 'product-parade-block')}
          setAttributes={setAttributes}
          attributes={fontSize}
          units={['px', '%', 'em']}
          attributesKey={fontSizeKey}
          min={0}
          max={60}
          step={1}
        />
        }

        { fontFamily &&
        <SelectControl
          label={__('Font Family', 'product-parade-block')}
          value={attributes[fontFamily]}
          options={fontFamilyOptions}
          onChange={(newValue) => setAttributes({ [fontFamily]: newValue })} 
        />
        }

        { fontWeight &&
        <SelectControl
           label={__('Font Weight', 'product-parade-block')}
           value={attributes[fontWeight]}
           options={fontWeightOptions}
           onChange={(newValue) => setAttributes({ [fontWeight]: newValue })} 
        />
        }
      </div>
    </div>
  );
}

export default Typography;
