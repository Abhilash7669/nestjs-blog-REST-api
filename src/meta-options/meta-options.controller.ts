import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreatePostsMetaDataDto } from 'src/meta-options/dto/create-posts-metadata.dto';
import { MetaOptionsService } from 'src/meta-options/providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Injecting Meta Options Service
     */
    private readonly metaOptionsService: MetaOptionsService,
  ) {}

  @ApiOperation({
    description: 'Fetches all the tags from database',
  })
  @Get()
  findAll() {
    return this.metaOptionsService.findAll();
  }

  @ApiOperation({
    description: 'Creates a MetaOption in the database',
  })
  @Post()
  create(@Body() createMetaOptionDto: CreatePostsMetaDataDto) {
    return this.metaOptionsService.create(createMetaOptionDto);
  }
}
