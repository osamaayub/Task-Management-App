import React from 'react';

interface SelectProps {
  onValueChange: (value: string) => void;
  defaultValue: string;
  children: React.ReactNode;
}

interface SelectOptionProps {
  value: string;
  children: React.ReactNode;
  onSelect?: (value: string) => void;
}

interface SelectTriggerProps {
  children: React.ReactNode;
}

interface SelectValueProps {
  value: string;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ onValueChange, defaultValue, children }) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <div>
      <SelectTrigger>
        <SelectValue value={selectedValue} />
      </SelectTrigger>
      <SelectContent>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child.type === SelectOption || child.type === SelectItem)) {
            return React.cloneElement(child as React.ReactElement<SelectOptionProps>, { onSelect: handleChange });
          }
          return child;
        })}
      </SelectContent>
    </div>
  );
};

export const SelectOption: React.FC<SelectOptionProps & { onSelect?: (value: string) => void }> = ({ value, children, onSelect }) => {
  return (
    <div onClick={() => onSelect && onSelect(value)}>
      {children}
    </div>
  );
};

export const SelectItem: React.FC<SelectItemProps & { onSelect?: (value: string) => void }> = ({ value, children, onSelect }) => {
  return (
    <div onClick={() => onSelect && onSelect(value)}>
      {children}
    </div>
  );
};

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectValue: React.FC<SelectValueProps> = ({ value }) => {
  return <span>{value}</span>;
};

export const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

function TaskForm() {
  const handleValueChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <form>
      <Select onValueChange={handleValueChange} defaultValue="Medium">
        <SelectOption value="Low">Low</SelectOption>
        <SelectOption value="Medium">Medium</SelectOption>
        <SelectOption value="High">High</SelectOption>
        <SelectItem value="Urgent">Urgent</SelectItem>
      </Select>
    </form>
  );
}

export default TaskForm;
