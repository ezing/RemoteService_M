import React, { useState } from 'react';
import { Select, Input, InputNumber, Row, Col } from 'antd';
import { map, get, set } from 'lodash';

export interface IOption {
  label: string;
  value: string;
  key?: any;
}

interface IProps {
  value?: any;
  onChange?: any;
  selectedValueShowInput?: any;
  inputType?: 'string' | 'number';
  options?: IOption[];
}

export default (props: IProps) => {
  const { inputType = 'string', options: selectOptions, value, selectedValueShowInput } = props;

  const [data, setData] = useState(value || {});
  const [showInput, setShowInput] = useState(get(data, 'select') === selectedValueShowInput);

  const handleChange = (type: 'string' | 'number' | 'select' | undefined) => (e: any) => {
    const { onChange } = props;
    if (type === 'string') {
      set(data, 'input', get(e, 'target.value'));
    }
    if (type === 'number') {
      set(data, 'input', e);
    }
    if (type === 'select') {
      set(data, 'select', e);
    }
    if (get(data, 'select') === selectedValueShowInput) {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
    setData(data);
    onChange && onChange(data);
  };

  return (
    <div>
      <Row>
        <Col span={11}>
          <Select size="small" onChange={handleChange('select')} placeholder="请选择..." value={get(data, 'select')}>
            {map(selectOptions, (option: IOption) => {
              return (
                <Select.Option key={option.key || option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
        {showInput && (
          <Col span={11} offset={1}>
            {inputType === 'string' ? (
              <Input
                size="small"
                onChange={handleChange(inputType)}
                value={get(data, 'input')}
                placeholder="请输入..."
              />
            ) : (
              <InputNumber
                size="small"
                onChange={handleChange(inputType)}
                placeholder="请输入..."
                value={get(data, 'input')}
              />
            )}
          </Col>
        )}
      </Row>
    </div>
  );
};
