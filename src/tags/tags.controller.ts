import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';
import { DeleteTagsParamsDto } from 'src/tags/dto/delete-tags.params.dto';
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

  /**
   * Soft deletes a tag
   */
  @ApiOperation({
    description: 'Soft deletes a tag',
  })
  @ApiParam({
    name: 'id',
    description: 'Id of tag passed to route param',
    required: true,
  })
  @Delete('soft-delete/:id')
  public softDelete(@Param() deleteTagsParamDto: DeleteTagsParamsDto) {
    return this.tagsService.softDelete(deleteTagsParamDto.id);
  }

  /**
   * Delete tag
   */
  @ApiOperation({
    description: 'Delete a tag in the database',
  })
  @ApiParam({
    name: 'id',
    description: 'Id of tag passed to route param',
    required: true,
  })
  @Delete('/:id')
  delete(@Param() deleteTagsParamDto: DeleteTagsParamsDto) {
    return this.tagsService.delete(deleteTagsParamDto.id);
  }
}
