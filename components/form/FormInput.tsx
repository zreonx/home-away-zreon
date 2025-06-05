import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

export default function FormInput(props: FormInputProps) {
  const { name, type, defaultValue, label, placeholder } = props;
  return (
    <div className="mb">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
