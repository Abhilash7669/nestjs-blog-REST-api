import { MetaOption } from 'src/meta-options/meta-option.entity';
import { postStatus } from 'src/posts/enum/postStatus.enum';
import { postType } from 'src/posts/enum/postType.enum';
import { Tag } from 'src/tags/tag.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
  })
  content?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp',
    nullable: false,
  })
  publishedOn: Date;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags?: Tag[];

  /**
   * related user with user id and declaring it's inverse relationship
   * many to one
   */
  @ManyToOne(() => User, (user) => user.posts)
  author: User;

  /**
   * declaring relation type and it's inverse (bi-direction)
   */
  @OneToOne(() => MetaOption, (metaOptions) => metaOptions.post, {
    cascade: true,
  })
  metaOptions?: MetaOption | null;
}
