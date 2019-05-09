import {StorageInterface} from './storage.interface';

export class StorageModel implements StorageInterface {
  public agree: boolean;
}

// TODO: The storage object could use an expire object for the "remember me" item
