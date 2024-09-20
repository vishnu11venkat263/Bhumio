import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateClickStatDto } from './dto/create-click_stat.dto';
import { clickStatsDto } from './dto/clickStats.dto';
import { ClickStatService } from './click_stats.service';
import { RolesGuard } from '../auth/roles.guard';
import { UserRole } from '../users/entities/user.entity';
import { Roles } from '../auth/role.decorator';

@Controller('click-stats')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ClickStatController {
  constructor(private readonly clickStatService: ClickStatService) { }

  @Post()
  @Roles(UserRole.ADMIN)
  create(@Body() createClickStatDto: CreateClickStatDto) {
    return this.clickStatService.create(createClickStatDto);
  }

  @Get()
  findAll() {
    return this.clickStatService.findAll();
  }

  @Post(':id')
  incrementClickCount(@Param('id') id: string) {
    return this.clickStatService.incrementClickCount(id);
  }

}