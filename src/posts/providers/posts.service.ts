import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { CreatePostsDto } from 'src/posts/dto/create-posts.dto';
import { PatchPostsDto } from 'src/posts/dto/patch-posts.dto';
import { Post } from 'src/posts/post.entity';
import { DeletePostResponse } from 'src/posts/res/delete-post.res';
import { TagsService } from 'src/tags/providers/tags.service';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Injecting postRepository
     */
    @InjectRepository(Post) private postRepository: Repository<Post>,
    /**
     * Injecting metaOptionRepository
     */
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
    /**
     * Injecting user service
     */
    private readonly userService: UsersService,

    /**
     * Injecting tags service
     */
    private readonly tagsService: TagsService,
  ) {}

  async findAll() {
    return await this.postRepository.find({
      relations: {
        metaOptions: true,
      },
    });
  }

  /**
   * Finds One Post
   * @param id
   * @returns Post
   */
  async findOne(id: number) {
    const post = await this.postRepository.findOne({
      where: {
        id,
      },
      relations: {
        metaOptions: true,
      },
    });
    return post;
  }

  public async create(createPostsDto: CreatePostsDto) {
    // Find the author
    const author = await this.userService.findOne(createPostsDto.authorId);
    if (!author) return;

    // Find multiple tags
    const tags = await this.tagsService.findMultipleTags(
      createPostsDto.tags ?? [],
    );
    // Create Post
    const createdPost = this.postRepository.create({
      ...createPostsDto,
      author: author,
      tags: tags,
    });

    return await this.postRepository.save(createdPost);
  }

  public async update(patchPostsDto: PatchPostsDto, postId: number) {
    // Find Tags

    const tags = await this.tagsService.findMultipleTags(
      patchPostsDto.tags ?? [],
    );

    if (!tags) return;

    // Find Post
    const post = await this.postRepository.findOneBy({
      id: postId,
    });
    if (!post) return;

    // Update properties
    post.title = patchPostsDto.title ?? post?.title;
    post.slug = patchPostsDto.slug ?? post.slug;
    post.content = patchPostsDto.content ?? post.content;
    post.postType = patchPostsDto.postType ?? post.postType;
    post.featuredImageUrl =
      patchPostsDto.featuredImageUrl ?? post.featuredImageUrl;
    post.status = patchPostsDto.status ?? post.status;
    post.publishedOn = patchPostsDto.publishedOn ?? post.publishedOn;

    // Update tags
    post.tags = tags;
    // save and confirm
    return await this.postRepository.save(post);
  }

  public async delete(id: number): Promise<DeletePostResponse> {
    // Delete post
    await this.postRepository.delete(id);

    // confirmation
    return {
      deleted: true,
      id,
    };
  }
}
