export interface Family extends Revision {
  name: string;
  frames: number;
  breed: string;
  imageUrl?: string;
  crationDate: Date;
  revisions?: [Revision];
}

export interface Revision {
  revisionDate: Date;
  addedFrames: number;
  removedFrames: number;
  remark: string;
  nextRevision?: Date;
  todoNextTime?: string;
}
