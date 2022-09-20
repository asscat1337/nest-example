import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { User } from './entity/User';
import { PostData } from './entity/Post';

export const connection = TypeOrmCoreModule.forRoot({
  type: 'mongodb',
  host: 'localhost',
  database: 'nest-example',
  port: 27017,
  entities: [User, PostData],
  synchronize: true,
});
