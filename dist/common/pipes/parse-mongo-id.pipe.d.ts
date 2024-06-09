import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseMongoIdPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): string;
}
