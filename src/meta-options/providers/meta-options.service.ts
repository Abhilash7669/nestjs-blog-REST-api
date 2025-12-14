import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostsMetaDataDto } from 'src/meta-options/dto/create-posts-metadata.dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    /**
     * Inject metaOptionRepository
     */
    @InjectRepository(MetaOption)
    private metaOptionRepository: Repository<MetaOption>,
  ) {}

  public async findAll() {
    return this.metaOptionRepository.find();
  }

  public async create(createPostsMetaDto: CreatePostsMetaDataDto) {
    const createdPostsMetaOption =
      this.metaOptionRepository.create(createPostsMetaDto);
    return await this.metaOptionRepository.save(createdPostsMetaOption);
  }
}
