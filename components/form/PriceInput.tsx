import { Input } from "../ui/input";
import { Label } from "../ui/label";

//const name = Prisma.PropertyScalarFieldEnum.price

type PriceInputProps = {
    defaultValue?: number;
}

function PriceInput({defaultValue}:PriceInputProps) {
  const name = 'price';
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="capitalize mb-1">
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
  )
}

export default PriceInput