import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from 'src/tags/tags.module';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    TagsModule,
    MetaOptionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      autoLoadEntities: true,
      port: 5432,
      synchronize: true,
      username: 'postgres',
      password: 'Kaizen47$',
      database: 'nestjs_blog',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
