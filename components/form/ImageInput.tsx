import { Input } from "../ui/input";
import { Label } from "../ui/label";

function ImageInput() {
    const name = 'image';
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="capitalize mb-1">Image</Label>
        <Input id={name} name={name} type="file" required accept="image/*"
            className="max-w-xs cursor-pointer"/>
    </div>
  )
}

export default ImageInput;
