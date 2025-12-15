import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';
import { Tag } from 'src/tags/tag.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    /**
     * Injecting tagRepository
     */
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  public async findMultipleTags(tags: Array<number>) {
    const multipleTags = await this.tagRepository.findBy({
      id: In(tags),
    });

    console.log(multipleTags);
    return multipleTags;
  }

  public async create(createTagsDto: CreateTagDto) {
    const createdTag = this.tagRepository.create(createTagsDto);

    return await this.tagRepository.save(createdTag);
  }

  public async delete(id: number) {
    await this.tagRepository.delete(id);
    return {
      deleted: true,
      id,
    };
  }

  public async softDelete(id: number) {
    await this.tagRepository.softDelete(id);

    return {
      deleted: true,
      id,
    };
  }
}
