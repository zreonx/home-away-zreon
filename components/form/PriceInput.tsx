import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Prisma } from '@prisma/client';

type PriceInputProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: PriceInputProps) {
  // const name = Prisma.PropertyScalarFieldEnum.price;
  const name = 'price';
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Price ($)
      </Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}

export default PriceInput;
