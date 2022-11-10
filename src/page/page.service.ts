import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePageDto } from "./dto/create-page.dto";
import { UpdatePageDto } from "./dto/update-page.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { PageEntity } from "./entities/page.entity";
import { getConnection, getRepository, Repository } from "typeorm";
import { JURISDICTION } from "../const";

export interface PageRo {
  list: PageEntity[];
  count: number;
}

let idArr = [];

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(PageEntity)
    private readonly pageRepository: Repository<PageEntity>
  ) {
  }

  async create(createPageDto: CreatePageDto) {
    const { name } = createPageDto;
    const doc = await this.pageRepository.findOne({ where: { name } });
    if (doc) {
      throw new HttpException("路由名已存在", HttpStatus.BAD_REQUEST);
    }
    return await this.pageRepository.save(createPageDto);
  }

  async findAll(query, req): Promise<PageRo> {
    const role = req.user.role;
    const db = await getRepository(PageEntity).createQueryBuilder("page");
    const list = await db.getMany();
    const count = await db.getCount();
    let arr = [];
    list.forEach(item => {
      if (JURISDICTION[role].indexOf(item.jurisdiction) !== undefined) {
        arr.push(item);
      }
    });
    return { list: arr, count: count };
  }

  findOne(id: number) {
    return `This action returns a #${id} page`;
  }

  async update(updatePageDto: UpdatePageDto) {
    const { id, name, pid, path, title, component } = updatePageDto;
    await getConnection().createQueryBuilder().update("page")
      .set({ name: name, pid: pid, path: path, title: title, component: component })
      .where("page.id = :id", { id: id })
      .execute();
    return `修改成功`;
  }

  async remove(id: string) {
    const db = await getRepository(PageEntity).createQueryBuilder("page");
    const list = await db.getMany();
    idArr = [id];
    traverse(list, id);
    await getConnection().createQueryBuilder().delete().from("page")
      .where("page.id IN (:...ids)", { ids: idArr })
      .execute();
    return `删除成功`;
  }
}

//遍历数组循环知道没有子
const traverse = (arr: any, id: string) => {
  let myArr: any = [];
  arr.forEach(item => {
    if (item.pid === id) {
      myArr.push(item.id);
    }
  });
  myArr.forEach(item => {
    traverse(arr, item);
  });
  idArr = [...idArr, ...myArr];
  return myArr;
};
