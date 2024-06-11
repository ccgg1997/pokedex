import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axio.adapters';

@Module({
    providers: [AxiosAdapter],
    exports: [AxiosAdapter]
})
export class CommonModule {}
