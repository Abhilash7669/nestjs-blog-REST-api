import { CreatePostsMetaDataDto } from 'src/posts/dto/create-posts-metadata.dto';
import { postStatus } from 'src/posts/enum/postStatus.enum';
import { postType } from 'src/posts/enum/postType.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: postType,
    default: postType.POST,
    nullable: false,
  })
  postType: postType;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  slug: string;

  @Column({
    type: 'enum',
    nullable: false,
    enum: postStatus,
    default: postStatus.REVIEW,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
    length: 1024,
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
    length: 1024,
  })
  schema?: string;

  @Column({
    type: 'text',
    nullable: true,
    length: 1024,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  publishedOn: Date;

  @Column()
  tags?: Array<string>;

  @Column()
  metaOptions?: Array<CreatePostsMetaDataDto>;
}
