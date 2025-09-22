import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';

@Injectable()
export class UploadService {
  saveFile(file: Express.Multer.File, folder: string): string {
    const fileName = file.originalname.replace(/\s+/g, '_'); // Remove spaces for consistency
    const destinationPath = join(__dirname, '..', '..', 'uploads', folder);

    // Ensure the folder exists
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath, { recursive: true });
    }

    const filePath = join(destinationPath, fileName);

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
      return this.getFileUrl(fileName, folder);
    }

    // Save the file if it doesn't exist
    //@ts-ignore
    fs.writeFileSync(filePath, file.buffer);

    return this.getFileUrl(fileName, folder);
  }
  saveFiles(files: Express.Multer.File[], folder: string): string[] {
    return files.map((file) => this.saveFile(file, folder));
  }

  getFileUrl(fileName: string, folder: string): string {
    return `${process.env.BASE_URL}/uploads/${folder}/${fileName}`;
  }
}
