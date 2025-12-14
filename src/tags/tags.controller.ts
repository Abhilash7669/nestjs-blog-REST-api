import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';
import { GetMultipleTagsDto } from 'src/tags/dto/get-multiple-tags.dto';
import { TagsService } from 'src/tags/providers/tags.service';

@Controller('tags')
export class TagsController {
  constructor(
    /**
     * Injecting tags service
     */
    private readonly tagsService: TagsService,
  ) {}

  @ApiOperation({
    description: 'Find multiple tags',
  })
  @Get()
  findMultipleTags(@Body() getMultipleTagsDto: GetMultipleTagsDto) {
    return this.tagsService.findMultipleTags(getMultipleTagsDto.id);
  }

  /**
   * Creates tag
   */
  @ApiOperation({
    description: 'Create Tag in the database',
  })
  @Post()
  create(@Body() createTagsDto: CreateTagDto) {
    return this.tagsService.create(createTagsDto);
  }
}
