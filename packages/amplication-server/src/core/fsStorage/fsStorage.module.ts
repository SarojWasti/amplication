import { Module } from '@nestjs/common';
import { FsStorageService, FS_STORAGE_SERVICE } from './fsStorage.service';

@Module({
  exports: [
    {
      useClass: FsStorageService,
      provide: FS_STORAGE_SERVICE
    }
  ]
})
export class FsStorageModule {}