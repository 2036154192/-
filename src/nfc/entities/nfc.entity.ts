import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("nfc")
export class NfcEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  //code判断拿去数据唯一
  @Column()
  code: string;

  //标题
  @Column()
  title: string;

  //副标题
  @Column()
  subhead: string;

  //图片
  @Column({ type: "mediumtext" })
  img: string;

  //音频
  @Column({ type: "longtext" })
  audio: string;

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
