import { Storable } from '../Interfaces/Storable';

export class GetCartTotal {
    constructor(private storage: Storable) {}

    execute(): number {
        return this.storage.getTotalPrice();
    }
}