import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("page")
export class PageEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "0" })
  pid: string;

  //路由跳转name
  @Column()
  name: string;

  //页面路径
  @Column()
  path: string;

  //组件路径以../
  @Column()
  component: string;

  //menu图标
  @Column({ default: "" })
  icon: string;

  //menu标题
  @Column()
  title: string;

  //页面权限
  @Column({ default: "admin" })
  jurisdiction: string;

  //创建时间
  @Column({
    name: "create_time",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP"
  })
  createTime: Date;

  //修改时间
  @Column({
    name: "update_time",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP"
  })
  updateTime: Date;

}
