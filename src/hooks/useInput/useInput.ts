import React from 'react';

export const useInput = (initialValue: string | number) => {
    const [value, setValue] = React.useState(initialValue);
    
    const onChange = (event: React.FormEvent<EventTarget>) => {
      const target = event.target as HTMLInputElement;
      setValue(target.value)
    }
  
    const resetValue = () => setValue(initialValue);
  
    return {
      value,
      onChange,
      resetValue
    }
}