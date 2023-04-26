import { inject, Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FirestorageService {
  private storage: Storage = inject(Storage);
  constructor() {}

  uploadFile(file: any): Promise<any> {
    const fileRef = ref(this.storage, `family/${file.name}`);

    return uploadBytes(fileRef, file).then((_) =>
      getDownloadURL(fileRef).then((url) => url)
    );
  }
}
